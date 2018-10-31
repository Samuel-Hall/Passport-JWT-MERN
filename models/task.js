const mongoose = require("mongoose");
var validate = require("mongoose-validator");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  funds: { type: Number, required: false },
  isComplete: { type: Boolean, default: false, required: true }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
