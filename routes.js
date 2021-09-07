const express = require("express");
const userRouter = require("./user");
const productRouter = require("./products");
let router = express.Router();

router.use("/user", userRouter);

router.use("/products", productRouter);

module.exports = router;




