const express = require("express");
const likeController = require("./like.controller");

const likeRouter = express.Router();

likeRouter.get("/", (req, res) => {
  res.send(" welcome to the api of like");
});

likeRouter.post("/create", likeController.addLikes);

likeRouter.get("/find/:courseId", likeController.findlikes);

module.exports = likeRouter;
