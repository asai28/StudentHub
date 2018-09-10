const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  firstName: {
    type: String,
    unique: false
  },
  lastName: {
    type: String,
    unique: false
  },
  local: {
    username: {
      type: String,
      unique: false,
      required: false
    },
    password: {
      type: String,
      unique: false,
      required: false
    },
    google: {
      googleID: {
        type: String,
        requied: false
      }
    },
    photos: []
  }
});

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.local.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.local.password = this.hashPassword(this.local.password);
    next();
  }
});

//create reference to User model and export it
const User = mongoose.model("User", userSchema);
module.exports = User;
