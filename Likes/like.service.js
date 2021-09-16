const likeModel = require("./like.model");

exports.addLike = function (data) {
  return new Promise((resolve, reject) => {
    let like = new likeModel(data);
    like
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        if (error.code === 11000) {
          reject("already data exits ");
        } else {
          reject("Internal server error");
        }
      });
  });
};

exports.find = function (data) {
  return new Promise((resolve, reject) => {
    let query = {
      courseId: data.courseId,
    };

    let projection = {
      email: 1,
    };
    likeModel
      .find(query, projection)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
