const User = require("../models/user");
// const jwt = require("jsonwebtoken");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "username" // not necessary, DEFAULT
  },
  function(username, password, done) {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (!user.isActive) {
        return done(null, false, { message: "User is not active" });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  }
);

module.exports = strategy;
