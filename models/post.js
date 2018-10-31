const mongoose = require("mongoose");
var validate = require("mongoose-validator");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: Array, required: false },
  isPublished: { type: Boolean, default: false, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
