const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Project.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Project.findById(req.params.id)
      .populate("tasks")
      .populate({
        path: "threads",
        options: { sort: { updatedAt: -1 } },
        populate: {
          path: "comments",
          model: "Comment",
          options: { sort: { createdAt: -1 } }
        }
      })
      .populate("posts")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Project.create(req.body)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.Project.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Project.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
