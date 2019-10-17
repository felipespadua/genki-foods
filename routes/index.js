const express = require('express');
const router  = express.Router();
const passport = require("passport");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/login', (req, res, next) => {
  res.render('login');
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/matches",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

module.exports = router;
