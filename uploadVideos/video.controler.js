const videoService = require("./video.service");
const path = require("path");

exports.upload = function (req, res) {
  if (req.body && req.file) {
    let videoSchema = {
      ...req.body,
      file: req.file.filename,
      filePath: path.resolve(req.file.path),
    };
    //   console.log(req.video);
    console.log(req.file);
    videoService
      .createVideo(videoSchema)
      .then((result) => {
        res.send({ message: "Video added  successfully" });
      })
      .catch((err) => {
        res.send({ message: " video not added successfully" });
      });
  }
};

exports.allVideos = function (req, res) {
  videoService
    .allVideos({ query: req.query })
    .then(function (result) {
      // res.send({ message: "Cover Details successfully ", result });
      res.render("videos", { data: result });
    })
    .catch((err) => {
      res.send({ error: "Data not added successfully", err });
    });
};

exports.findVideos = function (req, res) {
  videoService
    .allVideos({ query: req.query })
    .then(function (result) {
      // res.send({ message: "videos Details successfully ", result });
      res.render("allVideo", { data: result });
    })
    .catch((err) => {
      res.send({ error: "Data not added successfully", err });
    });
};

exports.findvideoDetails = function (req, res) {
  videoService
    .findvideoDetails(req.params)
    .then(function (result) {
      // res.send({ message: "Cover Details successfully ", result });
      console.log("data from coverDetails", result);
      res.render("videos", { data: result });
    })
    .catch((err) => {
      res.send({ error: "Data not added successfully", err });
    });
};
