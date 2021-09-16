const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const commentsSchema = new Schema({
  email: { type: String, required: true },
  comments: { type: String, required: true },
  courseId: { type: String, required: true },
});

// commentsSchema.index({ email: 1, courseId: 1,}, { unique: true });



const CommentsModel = Mongoose.model("comment", commentsSchema);

module.exports = CommentsModel;
