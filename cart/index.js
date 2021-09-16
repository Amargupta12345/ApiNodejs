const express = require("express");
const cartController = require("./cart.controller");
const Auth = require("../common");

const cartRouter = express.Router();

cartRouter.get("/", function (req, res) {
  res.send("welcome to the cart Router");
});

cartRouter.post("/addProduct", Auth.isloggedIn, cartController.add);

cartRouter.post("/removeProduct", Auth.isloggedIn, cartController.removeItem);

module.exports = cartRouter;
