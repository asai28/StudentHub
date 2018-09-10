//Connection to Mongo database
const mongoose = require("mongoose");
require("./models/user");
mongoose.Promise = global.Promise;
let MONGO_URL;
const MONGO_LOCAL_URL = "mongodb://localhost:27017/testUsers";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
  MONGO_URL = process.env.MONGODB_URI;
} else {
  mongoose.connect(MONGO_LOCAL_URL); // local mongo url
  MONGO_URL = MONGO_LOCAL_URL;
}

//should the connection be put in the call back?
const db = mongoose.connection;
db.on("error", err => {
  console.log(`There was an error connecting to the databae: ${err}`);
});

db.once("open", () => {
  console.log(
    `You have successfully connected to your mongo database: ${MONGO_URL}`
  );
});

module.exports = db;
