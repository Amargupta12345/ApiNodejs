const express = require("express");

const productRouter = express.Router();

productRouter.get("/", function (req, res) {
  res.send("created product");

  
});

productRouter.post("/add", function (req, res) {
  res.send("Add a product as much as you can addes product");
});
module.exports = productRouter;
