const express = require("express");
const CommentController = require("./comments.controller");
const commentRouter = express.Router();

commentRouter.get("/", (req, res) => {
  res.send(" welcome to the api of comensts");
});

commentRouter.post("/create", CommentController.addComments);

commentRouter.get("/find/:courseId", CommentController.findComments);


module.exports = commentRouter;
