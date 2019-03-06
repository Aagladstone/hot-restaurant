// Dependency
var express = require('express');
var app = express();
var path = require("path");

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

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function(req, res){
    res.sendFile(path.join(__dirname, "reservations.html"))
});

app.get("/viewtables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
});

// Connect server to PORT
app.listen(PORT, function(){
    console.log("app listening on Port: " + PORT);
});

