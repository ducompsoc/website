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

var app = express();

// Remove information about the server for security reasons
app.disable('x-powered-by');

// Set the path to the Pug views and specify Pug as the templating engine
app.set('views', './views');
app.set('view engine', 'pug');

/**
 * app.use takes a path and a function. Path defaults to / meaning that the function is called for every requested
 * route.
 *
 * express.static is a built in function that serves static files. In this case it makes all files in the public and
 * node modules folders available.
 *
 * reference:   https://expressjs.com/en/4x/api.html#app.use
 *              https://expressjs.com/en/4x/api.html#express.static
 */
app.use(express.static('public'));
app.use(express.static('node_modules'));

/**
 * Set up urlencodedParser function to use as middleware.
 *
 * reference:   https://github.com/expressjs/body-parser
 */
var urlencodedParser = bodyParser.urlencoded({ extended:false });

/**
 * Handles any HTTP GET requests to /. If the user navigates to /, res.render is called which renders the index view
 * and sends the resulting HTML to the client.
 *
 * reference:   https://expressjs.com/en/4x/api.html#app.get.method
 *              https://expressjs.com/en/4x/api.html#res.render
 *
 */
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/team', function (req, res) {
    res.render('team');
});

app.get('/events', function (req, res) {
    res.render('events');
});

app.get('/sponsors', function (req, res) {
    res.render('sponsors');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/blog', function (req, res) {
    res.render('blog');
});

app.get('/durhack', function (req, res) {
    res.render('durhack');
});

/**
 * Parse body and run reCAPTCHA authentication. If successful, use nodemailer to send an email to
 * computing.society@durham.ac.uk with the user's message.
 */
app.post('/api/contact', urlencodedParser, captchaAuth, inputValidation, function (req, res) {
    res.set('Content-Type', 'text/plain');

    // Set up email data with unicode symbols
    const mailOptions = {
        from: 'computing.society@durham.ac.uk',
        to: 'computing.society@durham.ac.uk',
        subject: req.body["subject"],
        text: "From: " + req.body["realname"] + " - " + req.body["email"] + "\n\n" +
            req.body["msgbody"]
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });

    res.sendStatus(200);
});

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
    console.log('Example app listening on port 9000!');
});
