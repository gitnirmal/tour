var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// viewed at http://localhost:8080/tours
app.get('/tours', function(req, res) {
    res.sendFile(path.join(__dirname + '/tours.html'));
});

// viewed at http://localhost:8080/about
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

// viewed at http://localhost:8080/contact
app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.use(express.static(path.join(__dirname)));

app.listen(8080);