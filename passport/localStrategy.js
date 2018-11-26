const User = require("../database/models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "username",
    passReqToCallback: true
  },
  function(req, username, password, done) {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log("local strategy error");
        return done(err);
      }
      if (!user) {
        console.log("local strategy incorrect username");
        return done(null, false, { message: "Incorrect username" });
      }
      if (!user.isActive) {
        console.log("local strategy user not active");
        return done(null, false, { message: "User is not active" });
      }
      if (!user.checkPassword(password)) {
        console.log("local strategy incorrect password");
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  }
);

module.exports = strategy;
