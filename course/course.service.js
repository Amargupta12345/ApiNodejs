const courseModel = require("./course.model");

exports.createDetail = function (data) {
  return new Promise((resolve, reject) => {
    let CourseModel = new courseModel(data);

    CourseModel.save()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.CourseDetails = function (data) {
  return new Promise((resolve, reject) => {
    let query = {
      _id: data._id,
    };
    // let projection = {
    //   title: 1,
    //   language: 1,
    //   startDate: 1,
    //   endDate: 1,
    //   videosCount: 1,
    //   rating: 1,
    //   instructor: 1,
    //   description: 1,
    //   price :1,
    // };
    courseModel.findOne(query).then(
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

/*

{
    "title" : " intereactive details added" ,
    "language" : "hindi , eng",
    "startDate" : 25/5/2,
    "endDate" : 25/6/3,
    "videosCount" : 5 ,
    "rating" : 10 ,
    "instructor" : "don",
    "description" : "these is most efficient way",
    "price" : 5000
}

*/
