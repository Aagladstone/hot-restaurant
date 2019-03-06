// Dependency
var express = require('express');
var path = require("path");

var app = express();

// This will help express understand the JSON we need in order to request/post information from the form and push into the arrays
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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

// Push information from form to the tables or waitlist array
// Getting JSON object from form 
app.post("/api/reservation", function(req, res){ // NOTE: request, is to receive data. res , is to send data
    // Create a variable to request/store data from the form
    var reservation = req.body;

    // There are only 5 tables therefore we check if there are any tables avaliable and then push the data to the appropriate array
    if (tables.length < 5){
        tables.push(reservation);
        res.json({reservation: true}); // This creates an object with the property of reservation. Reservation has the value true or false depending on table availibility 
        console.log(reservation);
    }
    else{
        waitlist.push(reservation);
        res.json({reservation: false});
    }
});


// Connect server to PORT
app.listen(PORT, function(){
    console.log("app listening on Port: " + PORT);
});

