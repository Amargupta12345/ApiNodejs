const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const videoSchema = new Schema({
  file: {
    type: String,
  },
  filePath: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
    default: 1,
  },
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    default: new Date(),
  },
});
// cartSchema.index({ email: 1, productId: 1 }, { unique: true });
const VideoModel = Mongoose.model("video", videoSchema);

module.exports = VideoModel;
