const express = require("express");
const router = express.Router();
const db = require("../db");
const User = require("../db/models/user.js")
const passport = require("../passport");

// router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/",
//     failureRedirect: "/login"
//   })
// );

// this route is used to get the user info
router.get("/user", (req, res, next) => {
  console.log("===== user!!======");
  if (req.user) {
    return res.json({ user: req.user });
  } else {
    return res.json({ user: null });
  }
});

router.post(
  "/login",
  passport.authenticate("local"),
  (req, res) => {
    console.log("POST to /login");
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser.local) {
      console.log(`Deleting ${cleanUser.local.password}`);
      delete cleanUser.local.password;
    }
    res.json({ user: cleanUser });
  }
);

router.post("/logout", (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie("connect.sid"); // clean up!
    return res.json({ msg: "logging you out" });
  } else {
    return res.json({ msg: "no user to log out!" });
  }
});

router.use("/signup", (req, res) => {
  const { username, password } = req.body;
  console.log(password);
  // ADD VALIDATION
  User.find({ "username": username }, (err, userMatch) => {
    if (userMatch.length > 0) {
      return res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    }
    else {
      console.log("Making new user", username)
      const newUser = new User({
        username,
        password
      });
      newUser.save((err, savedUser) => {
        console.log("HEYOOOO", err, savedUser)
        if (err) return res.json(err);
        console.log("saved user", savedUser)
        console.log("Im' being saved")
        return res.json(savedUser);
      });
    }
  });
});

module.exports = router;
