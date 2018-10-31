const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Comment.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Comment.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Comment.create(req.body[0])
      .then(comment => {
        db.Thread.findOneAndUpdate(
          { _id: req.body[1].thread },
          {
            $push: { comments: comment._id }
          },
          { new: true }
        )
          .populate("comments")
          .then(dbModel => res.json(dbModel))
          .catch(function(err) {
            res.json(err);
          });
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Comment.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Comment.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
