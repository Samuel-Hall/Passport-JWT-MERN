const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.User.findOne({}, (err, user) => {
      if (err) {
        console.log("findOne error:", err);
      } else {
        res.json(user.username);
      }
    });
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // ADD VALIDATION
    db.User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        console.log("User.js post error: ", err);
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${req.body.username}`
        });
      } else {
        db.User.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    });
  },
  update: function(req, res) {
    // ADD VALIDATION
    db.User.findOne(
      { username: req.body.username, _id: { $ne: req.params.id } },
      (err, user) => {
        if (err) {
          console.log("User.js post error: ", err);
        } else if (user) {
          res.json({
            error: `Sorry, already a user with the username: ${
              req.body.username
            }`
          });
        } else {
          // Hashes password before updating db
          req.body.password = bcrypt.hashSync(req.body.password, 10);
          // updates with hashed password
          db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      }
    );
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
