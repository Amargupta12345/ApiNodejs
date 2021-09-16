// const fs= require("fs");
const multer = require("multer");
const express = require("express");
const service = require("./service");
const uploadsRouter = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    console.log(">>>>>>>>>>>>>>>>>>", file);
    exports.file = file.originalname;

    // console.log("User Data file", file.originalname);
    cb(null, file.originalname);
  },
});


const upload = multer({ storage: storage });


uploadsRouter.post("/upload", upload.single("file"), service.upload);

module.exports = uploadsRouter;
