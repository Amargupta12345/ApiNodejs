const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const batchSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  totalCourse: {
    type: Number,
    default: 1,
  },
});
batchSchema.index({ courseId: 1 }, { unique: true });
const batchModel = Mongoose.model("batch", batchSchema);

module.exports = batchModel;
