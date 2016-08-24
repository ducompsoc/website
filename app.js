/**
 * Created by Alistair on 20/08/2016.
 */

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function (req, res) {
    res.sendFile('/public/index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});