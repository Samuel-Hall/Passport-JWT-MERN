const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
  },
  { timestamps: { createdAt: "createdAt" } }
);

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
