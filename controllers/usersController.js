const db = require("../database/models");
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
    console.log(
      "attempting to update the following user information:",
      req.body,
      req.params.id
    );
    // Four cases:
    /* Case 1: Both username and email are provided in the PUT request
    --Find a db entry that has either the username OR the email, but the id does not match.
    --Check which match was found.
    --If username matches, send message that the username is already taken.
    --If email matches, send message that the email is already taken.
    --If no matches found, update the user data. */

    /* Case 2: Only the username is provided in the PUT request.
    --Find db entry that has the same username, but the id does not match.
    --If a match is found, send message that the username is taken, otherwise update the user data. */
    if (req.body.username && !req.body.email) {
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
            // Password resets will be handled in a different function altogether.
            // Hashes password before updating db
            // req.body.password = bcrypt.hashSync(req.body.password, 10);
            db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          }
        }
      );
    }

    /* Case 3: Only the email is provided in the PUT request
    --Find db entry with matching email
    --If a match is found, send message that the email is taken, otherwise update the user data. */
    if (req.body.email && !req.body.username) {
      db.User.findOne(
        { email: req.body.email, _id: { $ne: req.params.id } },
        (err, user) => {
          if (err) {
            console.log("User.js post error: ", err);
          } else if (user) {
            res.json({
              error: `Sorry, already a user with the email: ${req.body.email}`
            });
          } else {
            // Password resets will be handled in a different function altogether.
            // Hashes password before updating db
            // req.body.password = bcrypt.hashSync(req.body.password, 10);
            db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          }
        }
      );
    }

    /* Case 4: Neither username nor email are provided, but data needs to be updated
    --No duplicate checking needed, just findone and update.*/
    if (!req.body.email && !req.body.username) {
      db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
