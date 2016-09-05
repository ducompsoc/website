/**
 * Created by Alistair on 20/08/2016.
 */

var express = require('express');
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



// Start listening on port 3000 -- if running locally navigate to localhost:3000 in a browser to see the results!
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
