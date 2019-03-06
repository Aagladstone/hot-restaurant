// Dependency
var express = require('express');
var app = express();

// Set PORT to 3000 if not specified by Heroku
var PORT = process.env.PORT || 3000;

var tables = [];
var waitlist = [];

// Create set of routes that display tables data as JSONs
app.get('/api/tables', function(req, res){
    res.json(tables); // sends content from tables to URL as JSON
});
// Create set of routes that display waitlist data as JSONs
app.get('/api/waitlist', function(req, res){
    res.json(waitlist); // sends content from waitlist to URL as JSON
});

// Connect server to PORT
app.listen(PORT, function(){
    console.log("app listening on Port: " + PORT);
});

