const express = require("express");
const courseController = require("./cousre.controller");

const courseRouter = express.Router();

courseRouter.get("/", (req, res) => {
  res.send("welcome to the course api  ");
});

courseRouter.post("/create" , courseController.createDetails);

courseRouter.get("/details/:_id" , courseController.CourseDetail);

module.exports = courseRouter;