const batchModel = require("./batch.model");

exports.addToCourse = function (data) {
  return new Promise((resolve, reject) => {
    let batch = new batchModel(data);
    batch
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

exports.removeCourseFromCart = function (data) {
  return new Promise((resolve, reject) => {
    batchModel
      .findOne(data)
      .then((item) => {
        if (item) {
          if (item.totalCourse > 1) {
            item.totalCourse = item.totalCourse - 1;
            item
              .save()
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                reject("Error While Removing Item");
              });
          } else {
            exports
              .deleteCourseFromCart(data)
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                reject(error);
              });
          }
        } else {
          reject("No Such Product Found");
        }
      })
      .catch((error) => {
        reject("Internal Server Error");
      });
  });
};

exports.deleteCourseFromCart = function (data) {
  return new Promise((resolve, reject) => {
    let query = { email: data.email, courseId: data.courseId };
    batchModel
      .findOneAndDelete(query)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.showcourse = function (data) {
  return new Promise((resolve, reject) => {
    let query = {
      _id: data._id,
    };
    let projection = { courseId: 1, totalCourse: 1, email: 1 };
    batchModel.findOne(query, projection).then(
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
