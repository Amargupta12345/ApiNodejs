const CartServices = require("./cart.service");

exports.add = function (req, res) {
  if (req.body && req.body.email && req.body.productId) {
    CartServices.addToCart(req.body)
      .then((result) => {
        res.send({
          message: "Product Added to cart",
          result: result,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: error,
        });
      });
  } else {
    res.status(500).send({
      message: "userId or productId is missing",
    });
  }
};

exports.removeItem = function (req, res) {
  CartServices.removeItemFromCart(req.body).then(
    (result) => {
      res.send({ message: "remove item sucessfully", result });
    },
    (err) => {
      res.send({ err: "remove not successfully", err });
    }
  );
};
