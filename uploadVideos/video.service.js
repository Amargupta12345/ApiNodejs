const VideoModel = require("./video.model");

exports.createVideo = function (data) {
  return new Promise((resolve, reject) => {
    let videoData = new VideoModel(data);
    videoData
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        if (err.code === 11000) {
          reject("already data exits ");
        } else {
          reject("Internal server error");
        }
      });
  });
};

exports.allVideos = function (data) {
  return new Promise((resolve, reject) => {
    let query = data.query || {};
    let projection = { title: 1, language: 1, _id: 1, file: 1, filePath: 1 };
    VideoModel.find(query, projection)
      .then((result) => {
        resolve(result);
        console.log("there is the results", result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.findVideos = function (data) {
  return new Promise((resolve, reject) => {
    let query = data.query || {};
    let projection = { title: 1, language: 1, _id: 1, year: 1  , rating :1};
    VideoModel.find(query, projection).then(
      (result) => {
        console.log("Find the cover details ", result);
        resolve(result);
      },
      (err) => {
        console.log("error while finding he details", err);
        reject(err);
      }
    );
  });
};


exports.findvideoDetails = function (data) {
  return new Promise((resolve, reject) => {
    let query = {
      _id: data._id,
    };
    
    VideoModel.findOne(query).then(
      (result) => {
        console.log("Find the cover details ", result);
        resolve(result);
      },
      (err) => {
        console.log("error while finding he details", err);
        reject(err);
      }
    );
  });
};