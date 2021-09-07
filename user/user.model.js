const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  image: { type: String },
  verified: { type: Boolean, default: false },
  createdat: { type: Date, default: new Date() },
  phone: { type: Number },
});


const Usermodel = Mongoose.model("users", UserSchema);

module.exports = Usermodel;