// Dependencies
var express = require("express");
// var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "savedJobs";
var collections = ["save"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// 1. At the root path, send a simple hello world message to the browser
app.get("/", function(req, res) {
  res.send("Hello world");
});

// 2. At the "/all" path, display every entry in the animals collection
app.get("/all", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  
});

// 3. At the "/name" path, display every entry in the animals collection, sorted by name
app.get("/name", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  
});

// 4. At the "/weight" path, display every entry in the animals collection, sorted by weight
app.get("/weight", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by weight (-1 means descending order)
  
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// build heroku react app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Set the app to listen on port 3000
app.listen(3001, function() {
  console.log("App running on port 3001!");
});

