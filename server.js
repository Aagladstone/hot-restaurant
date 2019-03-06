// Dependency
var express = require('express');
var app = express();

// Set PORT to 3000 if not specified by Heroku
var PORT = process.env.PORT || 3000;

// Connect server to PORT
app.listen(PORT, function(){
    console.log("app listening on Port: " + PORT);
});