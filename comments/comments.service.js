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
        console.log(error);
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
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
