var express = require("express");
var hotelsRoute = express.Router();

hotelsRoute.route("/").get((req, res) => {
  res.status(200).send("Hey, I am hotels router");
});

hotelsRoute.route("/details").get((req, res) => {
  res.status(200).send("I am the details page of hotels");
});

module.exports = hotelsRoute;
