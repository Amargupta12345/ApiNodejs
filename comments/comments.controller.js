const CommentsService = require("./comments.service");

exports.addComments = function (req, res) {
  CommentsService.addComment(req.body)
    .then((result) => {
      res.send({ message: "comments added successfully", result });
    })
    .catch((error) => {
      res.send({ message: "comments not added successfully", error });
    });
};

exports.findComments = function (req, res) {
  try {
    CommentsService.find(req.params)
      .then((result) => {
        res.send({ message: "comments fetch succefullt", result });
      })
      .catch((err) => {
        res.send({ message: "not shown", err });
      });
  } catch (error) {
    res.send({ message: "server error", error });
  }
};
