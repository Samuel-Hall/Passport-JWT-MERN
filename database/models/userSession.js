const mongoose = require("mongoose");
var validate = require("mongoose-validator");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSessionSchema
const userSessionSchema = new Schema({
  userId: { type: Number, unique: true, required: true, default: -1 },
  timestamp: { type: Date, unique: false, required: true, default: Date.now() },
  // If isDeleted is true of a user session, then we know the user is not logged in
  isDeleted: { type: Boolean, unique: false, required: true, default: false }
});

const UserSession = mongoose.model("UserSession", userSessionSchema);
module.exports = UserSession;
