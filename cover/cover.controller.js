const coverService = require("./cover.service");

exports.addCoverDetails = function (req, res) {
  coverService
    .addDetails(req.body)
    .then(function (result) {
      res.send({ message: "Cover Details added successfully" });
    })
    .catch((err) => {
      res.send({ error: "Data not added successfully" });
    });
};

exports.findCoverDetails = function (req, res) {
  coverService
    .findCoverDetails(req.params)
    .then(function (result) {
      // res.send({ message: "Cover Details successfully ", result });
      console.log("data from coverDetails", result);
      res.render("alldetails", { data: result });
    })
    .catch((err) => {
      res.send({ error: "Data not added successfully", err });
    });
};
exports.findCover = function (req, res) {
  coverService
    .findCover({ query: req.query })
    .then(function (result) {
      // res.send({ message: "Cover Details successfully ", result });
      res.render("coverdetails", { data: result });
    })
    .catch((err) => {
      res.send({ error: "Data not added successfully", err });
    });
};
exports.deleteCover = function (req, res) {
  coverService
    .deleteCover(req.params)
    .then(function (result) {
      res.send({ message: "Cover Deleted successfully ", result });
    })
    .catch((err) => {
      res.send({ error: "Cover not Deleted successfully", err });
    });
};
exports.updateCover = function (req, res) {
  coverService
    .updateCover(req.query._id, req.body)

    .then(function (result) {
      res.send({ message: "Cover updated successfully ", result });
    })
    .catch((err) => {
      res.send({ error: "Cover not updated successfully", err });
    });
};

// exports.url = function (req, res) {
//   coverService
//     .ImageUpload()
//     .then(function (result) {
//       res.send({ message: " url added succefully", result });
//     })
//     .catch((err) => {
//       res.send({ message: " url not added succefully", err });
//     });
// };
