const UserServices = require("./user.service");
const mail = require("../Mailer");
const common = require("./common");

exports.register = function (req, res) {
  UserServices.addUser(req.body).then(
    function (userResult) {
      common.getToken({ email: req.body.email }, function (error, token) {
        if (error) {
          UserServices.deleteUser(req.body); // delete user
          res.status(500).send({ message: "Error While Token Generation" });
        } else {
          // let url = `http://localhost:5000/user/verify/?token=${token}`
          let url = `${req.protocol}://${req.hostname}/user/verify/?token=${token}`;
          if (req.hostname === "localhost") {
            url = `http://localhost:5000/user/verify/?token=${token}`;
          }

          // send email
          mail
            .sendVerificationMail(req.body, url)
            .then(function () {
              res.send({
                message:
                  "Registration Succesfull. Please check your inbox for account verification",
              });
            })
            .catch(function (error) {
              UserServices.deleteUser(req.body);
              res
                .status(500)
                .send({ message: "Error While Sending Verification Mail" });
            });
        }
      });
    },
    function (error) {
      res.status(500).send(error);
    }
  );
};

exports.login = function (req, res) {
  UserServices.findUser(req.body).then(
    function (result) {
      res.send("Login Successfully");
    },
    function (err) {
      res.send(err);
    }
  );
};

exports.addusers = function (req, res) {};

exports.verify = function (req, res) {
  common.verifyToken(req.query.token, function (error, data) {
    if (error) {
      res.status(500).send();
    } else {
      UserServices.verifyUser(data).then(
        function (result) {
          res.send(result);
        },
        function (error) {
          res.status(500).send();
        }
      );
    }
  });
};
