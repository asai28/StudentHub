var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    
  jobid: String,
  link: String,
  title: String,
  date: Date
});

// This creates our model from the above schema, using mongoose's model method
var Job = mongoose.model("Job", JobSchema);

// Export the Book model
module.exports = Job;