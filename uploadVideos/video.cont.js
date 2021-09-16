var VideoService = require("./video.service");
const fs = require("fs");

exports.uploadVideo = (req, res) => {
  console.log("..................", req.body, req.file);
  var video = {
    title: req.body.title,
    filename: req.file.filename,
    coverurl: req.body.coverurl,
  };
  VideoService.createVideo(video).then(
    function (newvideo) { 
      res.send({
        data: newvideo,
      });
    },
    function () {
      res.status(500).send();
    }
  );
  //
};

exports.allVideos = function (req, res) {
  VideoService.allVideos({ query: req.query })
    .then(function (result) {
      // res.send({ message: "Cover Details successfully ", result });
      res.render("allvideo", { data: result });
    })
    .catch((err) => {
      res.send({ error: "Data not added successfully", err });
    });
};

exports.playVideo = function (req, res) {
  console.log("video id = ", req.params._id);
  VideoService.findvideoDetails(req.params._id).then(
    function (result) {
      videodetails.videourl = `http://${req.hostname}/video/streamvideo?videopath=${result.file}`;
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", result.videourl);
      res.render("playvideo", {
        data: result,
      });
    },
    function () {
      res.status(500).send();
    }
  );
};

exports.streamVideo = function (req, res) {
  const path = "./uploads/" + req.query.videopath;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mkv",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mkv",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
};
