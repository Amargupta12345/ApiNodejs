const express = require("express");
const userRouter = require("./user");
const productRouter = require("./products");
const coverRouter = require("./cover");
const cartRouter = require("./cart");
const uploadRouter = require("./uploadImage/image");
const uploadVideoRouter = require("./uploadVideos/video");
const courseRouter = require("./course");
const batchRouter = require("./batch");
const videoCourseRouter = require("./videoCourse");
const commentRouter = require("./comments");
const likeRouter = require("./likes");

let router = express.Router();

router.use("/user", userRouter); /// creation for user

router.use("/products", productRouter); // creation for product insertion

router.use("/cover", coverRouter); // create a cover opertion

router.use("/uploadsImage", uploadRouter); //uploads the images

router.use("/video", uploadVideoRouter); //uploads the images

router.use("/cart", cartRouter); // create a cart operation

router.use("/course", courseRouter); // create a course operation

router.use("/batch", batchRouter); // create a course operation

router.use("/videoCourse", videoCourseRouter); // create a videocourse operation

router.use("/comments", commentRouter); // create a comment operation

router.use("/like", likeRouter); // create a like operation

module.exports = router;
