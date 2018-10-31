const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
const threadRoutes = require("./threads");
const commentRoutes = require("./comments");

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/threads", threadRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
