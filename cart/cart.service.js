const CartModel = require("./cart.model");

exports.addToCart = function (data) {
  return new Promise((resolve, reject) => {
    let cart = new CartModel(data);
    cart
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 11000) {
          CartModel.findOneAndUpdate(
            data,
            { $inc: { quantity: 1 } },
            { new: true }
          ).then((result) => {
            if (result) {
              resolve(result);
            } else {
              reject("Internal Server Error");
            }
          });
        } else {
          reject("Internal Server Error");
        }
      });
  });
};

exports.removeItemFromCart = function (data) {
  return new Promise((resolve, reject) => {
    CartModel.findOne(data)
      .then((item) => {
        if (item) {
          if (item.quantity > 1) {
            item.quantity = item.quantity - 1;
            item
              .save()
              .then((result) => {
                resolve("Item Removed Succesfully");
              })
              .catch((error) => {
                reject("Error While Removing Item");
              });
          } else {
            exports
              .deleteProductFromCart(data)
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                reject(error);
              });
          }
        } else {
          reject("No Such Product Found");
        }
      })
      .catch((error) => {
        reject("Internal Server Error");
      });
  });
};

exports.deleteProductFromCart = function (data) {
  return new Promise((resolve, reject) => {
    let query = { email: data.email, productId: data.productId };
    CartModel.findOneAndDelete(query)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
