const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const CoverSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, default: "done" },
  model: { type: String },
  brand: { type: String },
  createdate: { type: Date, default: new Date() },
  rating: { type: Number, default: 5 },
  phone: { type: Number },
  role: { type: String, default: "user" },
  color: { type: String },
  image: { type: String },
  images: { type: String },
  material: { type: String, required: true },
});

const coverModel = Mongoose.model("covers", CoverSchema);

module.exports = coverModel;



//// json value pass
/*
"title" : "these is most efficient cover" ,
"model" :"realme -c-5",
"brand" : "realme" ,
"rating" : "5",
"phone" : "15525555255",
"role" :"seller",
"color" : "red",
"material" : "hard"


*/