const CourseService = require("./course.service");

exports.createDetails = function (req, res) {
  CourseService.createDetail(req.body)
    .then((result) => {
      res.send({ messsage: "added details successfully", result });
      console.log(">?>>", result);
    })
    .catch((error) => {
      res.send({ messsage: "added  details not successfully", error });
    });
};

exports.CourseDetail = function (req, res) {
  CourseService.CourseDetails(req.params)
    .then(function (result) {
      // console.log(">>>", req.params);
      res.send({ message: "Course Details successfully ", result });
      console.log("data from coverDetails", result);
      // res.render("alldetails", { data: result });
    })
    .catch((err) => {
      res.send({ error: "Data not course show successfully", err });
    });
};
