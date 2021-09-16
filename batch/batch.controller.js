const batchServices = require("./batch.service");

exports.add = function (req, res) {
  console.log(">>>>>", req.body);

  batchServices
    .addToCourse(req.body)
    .then((result) => {
      res.send({
        message: "Course Added to your cart",
        result: result,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error,
      });
    });
};

exports.removeCourse = function (req, res) {
  batchServices.removeCourseFromCart(req.body).then(
    (result) => {
      res.send({ message: "remove item sucessfully", result });
    },
    (err) => {
      res.send({ err: "remove not successfully", err });
    }
  );
};


exports.showCourse = function (req, res) {
  batchServices
    .showcourse(req.params)
    .then(function (result) {
      res.send({ message: "Course Details successfully ", result });
      console.log("data from coverDetails", result);
      // res.render("alldetails", { data: result });
    })
    .catch((err) => {
      res.send({ error: "Data not added successfully", err });
    });
};
