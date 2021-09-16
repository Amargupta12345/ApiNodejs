const jwt = require("jsonwebtoken");
var cloudinary = require("cloudinary").v2;
var ind = require("./uploadImage/image");

const secret = "JWT_SECRET";

exports.getToken = function (payload, cb) {
  jwt.sign(payload, secret, { expiresIn: "5h" }, function (err, token) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, token);
    }
  });
};

exports.verifyToken = function (token, cb) {
  jwt.verify(token, secret, function (err, payload) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, payload);
    }
  });
};

exports.isAdminIn = function (req, res, next) {
  var token = req.get("token");
  // console.log(token)
  jwt.verify(token, secret, function (err, payload) {
    console.log(payload);
    if (err) {
      console.log(err);
      res.status(401).send({
        error: "Unauthorised ",
      });
    } else {
      // cb(null, payload);

      if (payload.role === "Admin") {
        next();
      } else {
        res.status(401).send({
          error: "You are not a admin",
        });
      }
    }
  });
};

exports.isloggedIn = function (req, res, next) {
  var token = req.get("token");
  // console.log(token)
  jwt.verify(token, secret, function (err, payload) {
    console.log(payload);
    if (err) {
      console.log(err);
      res.status(401).send({
        error: "Unauthorised ",
      });
    } else {
      next();
    }
  });
};

// exports.upload = function (req, res) {
//   cloudinary.config({
//     cloud_name: "viruscoder",
//     api_key: "422569487794567",
//     api_secret: "_G25M0kr2YfDYLCj_zfgJ1Y2C2w",
//     secure: true,
//   });

//   cloudinary.uploader.upload(`./uploads/${ind.file}`, function (error, result) {
//     console.log(result, error);
//     console.log("result url", result.url);
//   });

//   res.send("File Recived");

//   console.log("User Data", ind.file);
// };
