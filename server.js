// Loading evnironmental variables here
if (process.env.NODE_ENV !== "production") {
  console.log("loading dev environments");
  require("dotenv").config();
}
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const path = require("path");

// loads our connection to the mongo database
const dbConnection = require("./db");
const passport = require("./passport");
const app = express();

const PORT = process.env.PORT || 3001;

// ===== Middleware ====
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(passport.initialize());
app.use(
  session({
    secret: process.env.APP_SECRET || "this is the default passphrase",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
);

// ===== Passport ====
/* Express app ROUTING */
app.use("/auth", require("./auth"));


// checking route
app.get("*", (req, res) => {
  console.log("=================== MAIN ROUTE ====================");
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/", function(req, res){
  res.send("Hi");
});

app.post("/", function(req, res){
  res.send({});
})

app.post("/savedJobs", function(req, res){
  console.log("req.body", req.body);
  const {jobid, link, title, date} = req.body;
  const newSaved = new Job({jobid, link, title, date});
  newSaved.save((err, savedJob) => {
    if(err){console.log(err);}
    else{
      console.log(savedJob);
    }
  })
});

app.get("/savedJobs", function(req, res){
  Job.find({}, function(err, found){
    if(err){
      console.log(err);
    }
    else{
      res.json(found);
    }
  })
})

app.get("/clear", function(req, res){
  Job.remove({}, function(err, found){
    if(err){
      console.log(err);
    }
    else{
      res.json(found);
    }
  })
});

app.get("/savedJobs/:id", function(req, res){
  console.log("Req ID:",req.params.id);
  Job.remove({_id: req.params.id}, function(err, found){
    if(err){
      console.log(err);
    }
    else{
      res.json(found);
    }
  })
})

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
