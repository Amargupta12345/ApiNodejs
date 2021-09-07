const express = require("express");
const router = require("./routes");
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");

const Port = process.env.PORT || 5000;

const dburl = "mongodb://localhost:27017/fyndb1";

const server = express();

Mongoose.connect(dburl).then(
  function () {
    console.log("Connetcted to database");
    server.listen(Port, function () {
      console.log("Server listening .............", Port);
    });
  },
  function (error) {
    console.log("Error in connecting to mongodb");
  }
);

server.use(bodyParser.json());

server.use(router);
