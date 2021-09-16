const UserModel = require("./user.model");

exports.addUser = function (data) {
  return new Promise((resolve, reject) => {
    let userData = new UserModel(data);
    userData
      .save(userData)
      .then((result) => {
        resolve();
      })
      .catch((err) => {
        console.log(err);
        if (err.code === 11000) {
          reject("User with this email already exists");
        } else {
          reject("Internal Server Error");
        }
      });
  });
};

exports.deleteUser = function (data) {
  return new Promise((resolve, reject) => {
    let query = {
      email: data.email,
    };
    UserModel.deleteOne(query)
      .then((result) => {
        resolve("Deletion Successfull");
      })
      .catch((err) => {
        reject("Internal Server Error");
      });
  });
};

exports.findUser = function (data) {
  return new Promise((resolve, reject) => {
    let query = {
      email: data.email,
      password: data.password,
    };
    UserModel.findOne(query)
      .then((result) => {
        if (result) {
          resolve(result);
        } else {
          reject("Invalid Credentails");
        }
      })
      .catch((err) => {
        reject("Internal Server Error");
      });
  });
};

exports.verifyUser = function (data) {
  return new Promise((resolve, reject) => {
    let findQuery = { email: data.email };
    let updateQuery = { $set: { verified: true } };
    UserModel.findOneAndUpdate(findQuery, updateQuery)
      .then((result) => {
        if (result) {
          resolve("User Verified Successfully");
        } else {
          reject("Verification Failed");
        }
      })
      .catch((error) => {
        reject("Internal Server Error");
      });
  });
};

exports.findAllUsers = function (req, res) {
  return new Promise((resolve, reject) => {
    // let query = {
    //   verified: true,
    //   role: "Admin", //admin
    // };
    UserModel.find({})

      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


