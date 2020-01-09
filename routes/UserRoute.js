const path = require("path");

const express = require("express");

const userController = require("../controllers/UserController");
const passport = require("passport");
const auth = require("../config/auth");
const router = express.Router();

router.get("/register", userController.getRegister);
router.post("/register", userController.postRegister);

router.get("/login", userController.getLogin);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  }),
  userController.postLogin
);

router.get('/logout', userController.getLogout);
router.get('/ratingaboutyou', userController.getRatingAboutYou);
router.get('/yourrating', userController.getYourRating);
router.get('/account', userController.getAccountInfo);
router.get('/changepassword', userController.getPassword);
router.get('/permission', userController.getPermission);

module.exports = router;
