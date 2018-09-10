const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../db/models/user");

const strategy = new GoogleStrategy(
  {
    clientID:
      "562590711946-23vb7dvkpaos669d6gr1mugnijsra5g0.apps.googleusercontent.com",
    clientSecret: "5Ws3USIKmNqQ3DuDpOMYMgMd",
    callbackURL: "/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
    //for testing
    console.log("GOOGLE PROFILE");
    console.log(profile);
    console.log("END OF GOOGLE PROFILE");

    const { id, name, photo } = profile;
    User.findOne({ "google.googleID": id }, (err, userMatch) => {
      //if there is an error
      if (err) {
        console.log("Error!! trying to find user with googleID");
        console.log(err);
        return done(null, false);
      }
      //if there is a match
      if (userMatch) {
        return done(null, userMatch);
      } else {
        //if there is not user, create a user with the googleID
        console.log("PRE SAVE");
        console.log(id);
        console.log(profile);
        console.log("Post save");
        const newGoogleUser = new User({
          "google.googleID": id,
          firstName: name.givenName,
          lastName: name.familyName,
          photos: photos
        });
        //saving the user
        newGoogleUser.save((err, savedUser) => {
          if (err) {
            console.log("Theres an error saving the user");
            console.log(err);
            return done(null, false);
          } else {
            return done(null, savedUser);
          }
        }); //closing newGoogleUser.save
      }
    }); //closing User.findOne
  }
);

module.exports = strategy;
