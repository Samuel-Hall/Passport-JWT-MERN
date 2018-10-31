const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Post.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Post.create(req.body[0])
      .then(post => {
        db.Project.findOneAndUpdate(
          { _id: req.body[1].project },
          {
            $push: { posts: post._id }
          },
          { new: true }
        )
          .then(project => {
            res.json(post);
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
