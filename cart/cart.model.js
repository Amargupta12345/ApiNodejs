const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const cartSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});
cartSchema.index({ email: 1, productId: 1 }, { unique: true });
const cartmodel = Mongoose.model("carts", cartSchema);

module.exports = cartmodel;
