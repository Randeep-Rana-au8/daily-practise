var express = require("express");
var locationRoute = express.Router();

locationRoute.route("/").get((req, res) => {
  res.status(200).send("I am at Location Route");
});

locationRoute.route("/details").get((req, res) => {
  res.status(200).send("I am detail page of locations");
});

module.exports = locationRoute;
