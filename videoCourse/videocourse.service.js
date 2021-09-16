const videoCourseModel = require("./videocourse.model");

exports.addVideoCourse = function (data) {
  return new Promise((resolve, reject) => {
    let video = new videoCourseModel(data);
    video
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 11000) {
          reject("Internal Server Error");
        } else {
          reject("Internal Server Error");
        }
      });
  });
};
