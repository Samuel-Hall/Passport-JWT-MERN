const router = require("express").Router();
const threadsController = require("../../controllers/threadsController");

// Matches with "/api/threads"
router
  .route("/")
  .get(threadsController.findAll)
  .post(threadsController.create);

// Matches with "/api/thread/:id"
router
  .route("/:id")
  .get(threadsController.findById)
  .put(threadsController.update)
  .delete(threadsController.remove);

module.exports = router;
