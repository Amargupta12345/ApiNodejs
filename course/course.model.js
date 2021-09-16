const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: "javascript",
  },
  category: {
    type: String,
    default: "nodejs",
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  videosCount: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  instructor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const CourseModel = new mongoose.model("courses", courseSchema);

module.exports = CourseModel;

/*

{
    "title" : " intereactive details added" ,
    "language" : "hindi , eng",
    "startDate" : 25/5/2,
    "endDate" : 25/6/3,
    "videosCount" : 5 ,
    "rating" : 10 ,
    "instructor" : "don",
    "description" : "these is most efficient way",
    "price" : 5000
}

*/
