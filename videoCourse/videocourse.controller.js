const videocourseServices = require("./videocourse.service");

exports.add = function (req, res) {
  console.log(">>>>>", req.body);

  videocourseServices
    .addVideoCourse(req.body)
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
