// const fs= require("fs");
const multer = require("multer");
const express = require("express");
const service = require("./video.controler");
// const service = require("./video.cont");
const uploadsVideoRouter = express.Router();
const Auth = require("../common")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./videos/");
  },
  filename: function (req, file, cb) {
    console.log(">>>>>>>>>>>>>>>>>>", file);
    // exports.file = file.originalname;

    // console.log("User Data file", file.originalname);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

uploadsVideoRouter.post("/upload",Auth.isloggedIn ,upload.single("file"), service.upload);

uploadsVideoRouter.get("/allVideos", service.allVideos);

uploadsVideoRouter.get("/Videofind", service.findVideos);

uploadsVideoRouter.get("/findvideoDetails/:_id", service.findvideoDetails);


module.exports = uploadsVideoRouter;
