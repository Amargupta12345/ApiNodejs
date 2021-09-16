const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const likeSchema = new Schema({
  email: { type: String, required: true },
  courseId: { type: String, required: true },
});

likeSchema.index({ email: 1, courseId: 1 }, { unique: true });

const likeModel = Mongoose.model("like", likeSchema);

module.exports = likeModel;
