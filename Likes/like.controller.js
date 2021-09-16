const LikeService = require("./like.service");

exports.addLikes = function (req, res) {
  LikeService.addLike(req.body)
    .then((result) => {
      res.send({ message: "Like succesfully added", result });
    })
    .catch((err) => {
      res.send({ message: "Like succesfully not added", err });
    });
};

exports.findlikes = function (req, res) {
  LikeService.find(req.params)
    .then((result) => {
      res.send({ message: "likes fetch succefully", result });
    })
    .catch((err) => {
      res.send({ message: "not shown", err });
    });
};
