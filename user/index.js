const express = require("express");
const usercontroller  = require("./user.controller")
const userRouter = express.Router();

userRouter.get("/", function (req, res) {
  res.send("Welcome To home Routes");
});

userRouter.post("/register", usercontroller.register);


userRouter.post("/login", usercontroller.login);


userRouter.get("/verify", usercontroller.verify);


module.exports = userRouter;

