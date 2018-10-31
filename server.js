const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./mongo");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Morgan REST logger
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Sessions
app.use(
  session({
    secret: "party-gandalf", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
