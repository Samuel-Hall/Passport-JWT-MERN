const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Thread.find(req.query)
      .populate("comments")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Thread.findById(req.params.id)
      .populate("comments")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Thread.create(req.body[0])
      .then(thread => {
        db.Project.findOneAndUpdate(
          { _id: req.body[2].project },
          {
            $push: { threads: thread._id }
          },
          { new: true }
        )
          .then(project => {
            db.Comment.create(req.body[1])
              .then(comment => {
                db.Thread.findOneAndUpdate(
                  { _id: thread._id },
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
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Thread.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Thread.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
