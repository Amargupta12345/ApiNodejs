const CommentsModel = require("./comments.model");

exports.addComment = function (data) {
  return new Promise((resolve, reject) => {
    let comments = new CommentsModel(data);
    comments
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.find = function (data) {
  return new Promise((resolve, reject) => {
    let query = {
      courseId: data.courseId,
    };

    let projection = {
      comments: 1,
    };
    CommentsModel.find(query, projection)
      .populate("courseId")
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
