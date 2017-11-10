const passport = require("passport");
const User = require("../models/User");
const Score = require("../models/Score")

// Defining methods for the authController
module.exports = {
  doRegister: function (req, res) {
    //I added score:0 in case an err
    User.register(new User({ 
      username: req.body.username
     }),
      req.body.password, function (err, user) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      passport.authenticate('local')(req, res, function () {
        return res.status(200).json({ result: 'success', user: user });
      });
    });
  },
  doLogin: function (req, res) {
    passport.authenticate('local')(req, res, function () {
      // I added id:res.id incase of err
      return res.status(200).json({ result: 'success', user: req.user, session: req.session, id: res.id});
    });
  },
  logout: function (req, res) {
    req.logOut();
    return res.status(200).json({result:  "success"});
  }
};
