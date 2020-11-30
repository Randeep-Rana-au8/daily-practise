var express = require("express");
var app = express();
var hotelsRoute = require("./src/routes/hotelsRoute");
var locationRoute = require("./src/routes/locationRoute");
var port = process.env.PORT || 9090;

//default route
app.get("/", (req, res) => {
  res.status(200).send("Hello I am running on default route");
});

//location route
// locationRoute.route("/").get((req, res) => {
//   res.status(200).send("I am at Location Route");
// });

// locationRoute.route("/details").get((req, res) => {
//   res.status(200).send("I am detail page of locations");
// });

// hotelsRoute.route("/").get((req, res) => {
//   res.status(200).send("Hey, I am hotels router");
// });

// hotelsRoute.route("/details").get((req, res) => {
//   res.status(200).send("I am the details page of hotels");
// });

app.get("/users", (req, res) => {
  res.status(200).send("HI I am working on the users route");
});

app.use("/location", locationRoute);
app.use("/hotels", hotelsRoute);
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Website is running on port number " + port);
});
