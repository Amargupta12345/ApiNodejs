const express = require("express");
const videoCourseController = require("./videocourse.controller");

const videoCourseRouter = express.Router();

videoCourseRouter.get("/", (req, res) => {
  res.send("welcome to the Video course api  ");
});

videoCourseRouter.post("/create", videoCourseController.add);

// courseRouter.get("/details/:_id", videoCourseController.CourseDetail);

module.exports = videoCourseRouter;
