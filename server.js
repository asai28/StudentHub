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


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
