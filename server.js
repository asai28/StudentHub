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

// loads our connection to the mongo database
const dbConnection = require("./db");
const passport = require("./passport");
const app = express();

const PORT = process.env.PORT || 3001;

// ===== Middleware ====
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.APP_SECRET || "this is the default passphrase",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
);

// ===== Passport ====
app.use(passport.initialize());
// will call the deserializeUser
app.use(passport.session());

// ==== if its production environment!
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  console.log("YOU ARE IN THE PRODUCTION ENV");
  app.use("/static", express.static(path.join(__dirname, "../build/static")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/"));
  });
}

/* Express app ROUTING */
app.use("/auth", require("./auth"));

// ====== Error handler ====
app.use(function(err, req, res, next) {
  console.log("====== ERROR =======");
  console.error(err.stack);
  res.status(500);
});

// ==== Starting the API Server =====
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
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

// // const routes = require("./routes");
// const indexRoute = require("./routes/index");
// const user = require("./routes/users");
// require("./config/passport");

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(bodyParser.json());

// // Passport
// app.use(passport.initialize());

// // Routes
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
