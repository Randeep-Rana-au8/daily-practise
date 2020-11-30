var express = require("express");
var app = express();
var hotelsRoute = require("./src/routes/hotelsRoute");
var locationRoute = require("./src/routes/locationRoute");
var port = process.env.PORT || 9000;

var menu = [
  { link: "/", name: "Home" },
  { link: "/hotels", name: "Hotels" },
  { link: "/location", name: "Location" },
];

app.use(express.static(__dirname + "./public/css"));

app.set("views", "./src/view");
app.set("view engine", "ejs");

//default route
app.get("/", (req, res) => {
  res.render("index", { menuitem: menu });
});

//default route
// app.get("/", (req, res) => {
//   res.status(200).send("Hello I am running on default route");
// });

// location route
app.use("/location", locationRoute);

// hotels route
app.use("/hotels", hotelsRoute);

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Website is running on port number " + port);
});
