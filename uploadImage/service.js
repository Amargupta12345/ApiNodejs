var cloudinary = require("cloudinary").v2;
var ind = require("./image.js");

exports.upload = function (req, res) {
  cloudinary.config({
    cloud_name: "viruscoder",
    api_key: "422569487794567",
    api_secret: "_G25M0kr2YfDYLCj_zfgJ1Y2C2w",
    secure: true,
  });

  cloudinary.uploader.upload(`./uploads/${ind.file}`, function (error, result) {
    console.log(result, error);
    console.log("result url", result.url);
    exports.url = result.url;
    res.send(result.url);
  });


  //   console.log("User Data", ind.file);
};
