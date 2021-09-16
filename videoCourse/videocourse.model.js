const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const videoCourseSchema = new Schema({
  videoId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
});
videoCourseSchema.index({ courseId: 1, videoId: 1 }, { unique: true });
const videoCourseModel = Mongoose.model("videoCourse", videoCourseSchema);

module.exports = videoCourseModel;
