const express = require("express");
const batchcontroller =  require("./batch.controller")
const batchRouter = express.Router();

batchRouter.get("/", (req, res) => {
  res.send("welcome to the batch api  ");
});

batchRouter.post("/create", batchcontroller.add);

batchRouter.post("/remove", batchcontroller.removeCourse);

batchRouter.get("/showCourse/:_id" , batchcontroller.showCourse)

module.exports = batchRouter;
