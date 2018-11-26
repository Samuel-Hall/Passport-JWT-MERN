const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../passport/");
const jwt = require("jsonwebtoken");
const jwtVerify = require("./jwt");

// Matches with "/api/users"
router
  .route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, usersController.findAll);

// Matches with "/api/users/check"
router.route("/check").get(usersController.findOne);

// Matches with "/api/users/current"
router
  .route("/current")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, (req, res, next) => {
    if (req.user) {
      console.log("req.user", req.user);
      res.json({ user: req.user, authenticated: req.isAuthenticated() });
    } else {
      res.json({ user: null });
    }
  });

//User sign up on /api/users/signup
router.route("/signup").post(usersController.create);

//User login on /api/users/login
router.route("/login").post(
  // function(req, res, next) {
  // next();
  // },
  passport.authenticate("local"),
  // Handle success
  (req, res) => {
    var userInfo = {
      id: req.user.id,
      username: req.user.username,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      isActive: req.user.isActive
    };
    // Sign a JSON web token, send along with user data in response.
    jwt.sign(
      { userInfo },
      "disco-panda",
      { expiresIn: "30m" },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          userInfo
        });
      }
    );
  }
);

//User logout on /api/users/logout
router.route("/logout").post((req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/password/:id"
router
  .route("/password/:id")
  .get(usersController.findById)
  .put(
    jwtVerify.confirmToken,
    jwtVerify.verifyToken,
    usersController.updatePassword
  )
  .delete(usersController.remove);

module.exports = router;
