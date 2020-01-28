const User = require("../models/user.model");

exports.test = function(req, res) {
  res.send("This is the test controller!");
};

exports.user_create = function(req, res, next) {
  let user = new User({
    email: req.body.email,
    name: req.body.name
  });

  user.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("User Created successfully");
  });
};
