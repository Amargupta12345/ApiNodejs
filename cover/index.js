const express = require("express");
const coverController = require("./cover.controller");
const Auth = require("../common");
const coverRouter = express.Router();

coverRouter.get("/", function (req, res) {
  res.send("Welcome to the api of covers");
});
coverRouter.post(
  "/addDetails",
  Auth.isloggedIn,
  Auth.isAdminIn,
  coverController.addCoverDetails
);
coverRouter.get("/findCoverDetails/:_id", coverController.findCoverDetails);
coverRouter.get("/findCover", coverController.findCover);
coverRouter.delete("/deleteCover/:_id", coverController.deleteCover);
coverRouter.put("/updateCover/", coverController.updateCover);

// coverRouter.post("/uploadUrl", coverController.url);

module.exports = coverRouter;
