const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = passport => {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password"
      },
      function(username, password, done) {
        db.Buyers.findOne({ where: { Username: username } })
          .then(user => {
            console.log(user);
            bcrypt.compare(password, user.Password, (err, result) => {
              if (err) {
                return done(err);
              }
              if (!result) {
                return done(null, false, {
                  message: "Incorrect username and password"
                });
              }
              return done(null, user);
            });
          })
          .catch(function(err) {
            return done(err);
          });
      }
    )
  );
};
