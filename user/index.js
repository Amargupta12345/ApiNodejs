const express = require("express");
const usercontroller = require("./user.controller");
const userRouter = express.Router();
const Auth = require("../common");

userRouter.get("/", function (req, res) {
  res.send("Welcome To home Routes");
});

userRouter.post("/register", usercontroller.register);

userRouter.post("/login", usercontroller.login);

userRouter.get("/verify", usercontroller.verify);

userRouter.post("/allusers", Auth.isAdminIn, Auth.isloggedIn ,usercontroller.allUsers);

module.exports = userRouter;
