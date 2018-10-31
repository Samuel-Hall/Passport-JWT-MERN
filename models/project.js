const mongoose = require("mongoose");
var validate = require("mongoose-validator");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  summary: { type: String, required: false },
  funds: { type: Number, required: false },
  isComplete: { type: Boolean, default: false, required: true },
  date: { type: Date, default: Date.now },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  threads: [{ type: Schema.Types.ObjectId, ref: "Thread" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
