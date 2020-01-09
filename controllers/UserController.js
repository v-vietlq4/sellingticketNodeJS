const db = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

exports.getPermission = (req, res, next) => {
  res.render('information/permission',{ isLogin: req.isAuthenticated()});
};
exports.getPassword = (req, res, next) => {
  res.render('information/changepassword',{ isLogin: req.isAuthenticated()});
};
exports.getAccountInfo = (req, res, next) => {
  res.render('information/account',{ isLogin: req.isAuthenticated()});
};
exports.getRatingAboutYou = (req, res, next) => {
  res.render('users/ratingaboutyou',{ isLogin: req.isAuthenticated()});
};
exports.getYourRating = (req, res, next) => {
  res.render('users/yourrating', { isLogin: req.isAuthenticated()});
};

exports.getRegister = (req, res, next) => {
  res.render("users/register");
};

exports.postRegister = (req, res, next) => {
  db.Buyers.create({
    Username: req.body.userName,
    Password: bcrypt.hashSync(req.body.password, 10),
    FName: req.body.firstName,
    LName: req.body.lastName,
    Email: req.body.email,
    Street: req.body.adress
  }).then(() => {
    res.redirect("/login");
  });
};

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
exports.postLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.render("users/login");
  }
};

exports.getLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.render("users/login");
  }
};

exports.getLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
