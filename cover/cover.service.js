const coverModel = require("./cover.model");
const upload = require("../uploadImage/service");

exports.addDetails = function (data) {
  return new Promise((resolve, reject) => {
    let coverData = new coverModel(data);
    coverData
      .save()
      .then((result) => {
        resolve();
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

exports.findCoverDetails = function (data) {
  return new Promise((resolve, reject) => {
    let query = {
      _id: data._id,
    };
    let projection = {
      title: 1,
      model: 1,
      brand: 1,
      rating: 1,
      phone: 1,
      role: 1,
      color: 1,
      material: 1,
      image :1
    };
    coverModel.find(query, projection).then(
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

exports.findCover = function (data) {
  return new Promise((resolve, reject) => {
    let query = data.query || {};
    let projection = { title: 1, model: 1, _id: 1, image: 1 };
    coverModel.find(query, projection).then(
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

exports.deleteCover = function (data) {
  return new Promise((resolve, reject) => {
    let query = { _id: data._id };
    coverModel.deleteOne(query).then(
      (result) => {
        resolve(result);
        console.log("The data deleted successfully", result);
      },
      (err) => {
        console.log("The data is not deleted successfully", err);
        reject(err);
      }
    );
  });
};
exports.updateCover = function (_id, body) {
  return new Promise((resolve, reject) => {
    let query = { _id: _id };
    let updateQuery = { $set: body };
    coverModel.findOneAndUpdate(query, updateQuery).then(
      (result) => {
        resolve(result);
        console.log("The data updated successfully", result);
      },
      (err) => {
        console.log("The data is not updated successfully", err);
        reject(err);
      }
    );
  });
};

// exports.ImageUpload = function (data) {
//   return new Promise((resolve, reject) => {
//     cloudinary.config({
//       cloud_name: "viruscoder",
//       api_key: "422569487794567",
//       api_secret: "_G25M0kr2YfDYLCj_zfgJ1Y2C2w",
//       secure: true,
//     });

//     cloudinary.uploader.upload(
//       `../uploads/ex.jpg`,
//       function (error, result) {
//         console.log(result, error);
//         console.log("result url", result);
//         let query = { image: result.url };
//         coverModel.insertOne().then(
//           (result) => {
//             resolve(result);
//           },
//           (err) => {
//             reject(err);
//           }
//         );
//       }
//     );

//   });
// };
