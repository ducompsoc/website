/**
 * Created by Alistair on 20/08/2016.
 */

const express = require('express'),
    bodyParser = require('body-parser'),
    https = require('https'),
    querystring = require('querystring'),
    fs = require('fs'),
    nodemailer = require('nodemailer'),
    appDetails = JSON.parse(fs.readFileSync('./unimportantFile.json', 'utf-8'));

const poolConfig = {
    pool: true,
    host: appDetails["email-host"],
    port: appDetails["email-port"],
    secure: false, // STARTTLS
    auth: {
        user: appDetails["email-user"],
        pass: appDetails["email-password"]
    }
};

const transporter = nodemailer.createTransport(poolConfig);

// Store this in memory so that we don't have to read from the file system for each request
// Populated by getCurrentGitCommitHash()
let currentGitCommit;

var app = express();

// Remove information about the server for security reasons
app.disable('x-powered-by');

/**
 * Parse request bodies that are query strings or JSON objects.
 *
 * reference:   https://github.com/expressjs/body-parser
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Parse body and run reCAPTCHA authentication. If successful, use nodemailer to send an email to
 * computing.society@durham.ac.uk with the user's message.
 */
app.post('/api/contact', captchaAuth, inputValidation, function (req, res) {
    res.set('Content-Type', 'text/plain');

    // Set up email data with unicode symbols
    const mailOptions = {
        from: 'computing.society@durham.ac.uk',
        to: 'computing.society@durham.ac.uk',
        subject: req.body["subject"],
        text: "From: " + req.body["realname"] + " - " + req.body["email"] + "\n\n" +
            req.body["msgbody"],
        replyTo: req.body["email"]
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            console.error((new Date()).toString() + 'ERROR SENDING EMAIL: \n' + err);
            res.sendStatus(500);
        }
        else {
            console.log((new Date()).toString() + 'SENT EMAIL: \n' + info);
            console.log(info);
            res.sendStatus(200);
        }
    });
});

/**
 * Get the hash of the current git commit.
 * @returns {*}
 */
function getCurrentGitCommitHash() {
    if (currentGitCommit) {
        return currentGitCommit;
    }

    const rev = fs.readFileSync('../.git/HEAD').toString();
    if (rev.indexOf(':') === -1) {
        currentGitCommit = rev.trim();
    } else {
        currentGitCommit = fs.readFileSync('../.git/' + rev.substring(5).trim()).toString().trim();
    }

    return currentGitCommit;
}

/**
 * Runs reCAPTCHA authentication to protect against bot attacks.
 *
 * @param req
 * @param res
 * @param next
 */
function captchaAuth(req, res, next) {

    const postData = querystring.stringify({
        secret: appDetails["g-recaptcha-secret"],
        response: req.body["g-recaptcha-response"]
	});

    const captchaReqOptions = {
        hostname: "google.com",
        port: 443,
        path: "/recaptcha/api/siteverify",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": Buffer.byteLength(postData)
        }
    };

    const captchaReq = https.request(captchaReqOptions, function(response) {
        response.on("data", function (data) {
            var jsonObject = JSON.parse(data);
            if(jsonObject["success"] === true) {
                next();
            }
            else {
                res.sendStatus(403);
            }

        });
    });

    captchaReq.on("error", function () {
        res.sendStatus(500);
    });

    captchaReq.write(postData);
    captchaReq.end();
}

/**
 * Middleware that performs basic validations for inputs to api/contact.
 *
 * @param req
 * @param res
 * @param next
 */
function inputValidation(req, res, next) {

    const emailRegex = new RegExp("^(?=[A-Z0-9][A-Z0-9@._%+-]{5,253}$)[A-Z0-9._%+-]{1,64}@(?:(?=[A-Z0-9-]{1,63}\.)" +
        "[A-Z0-9]+(?:-[A-Z0-9]+)*\.){1,8}[A-Z]{2,63}$", "i");

    // Remove whitespace from beginning and end (better done functionally?)
    req.body["realname"] = req.body["realname"].trim();
    req.body["email"] = req.body["email"].trim();
    req.body["subject"] = req.body["subject"].trim();
    req.body["msgbody"] = req.body["msgbody"].trim();

    if (req.body["realname"].length === 0) {
        res.sendStatus(400);
        return;
    }

    if (req.body["email"].length === 0) {
        res.sendStatus(400);
        return;
    }

    console.log(req.body["email"]);

    if (!emailRegex.test(req.body["email"]) === true) {
        res.sendStatus(400);
        return;
    }

    if (req.body["subject"].length === 0) {
        res.sendStatus(400);
        return;
    }

    if (req.body["msgbody"].length === 0) {
        res.sendStatus(400);
        return;
    }

    next();

}

// Start listening on port 9000 -- if running locally navigate to localhost:9000 in a browser to see the results!
app.listen(9000, function () {
    console.log((new Date()).toString() + ': CompSoc app listening on port 9000!');
    console.log((new Date()).toString() + ': Using git commit ' + getCurrentGitCommitHash());
});
