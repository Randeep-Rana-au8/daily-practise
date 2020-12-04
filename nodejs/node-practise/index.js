var express = require("express");
var app = express();
var port = process.env.PORT || 9000;

const menu = [
  { link: "/", name: "Home" },
  { link: "/hotels", name: "Hotels" },
  { link: "/location", name: "City" },
];

var locationRouter = require("./src/router/locationRoute")(menu);
var hotelsRouter = require("./src/router/hotelsRoute")(menu);

app.set("views", "./src/view");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { menuitems: menu });
});

app.use("/location", locationRouter);
app.use("/hotels", hotelsRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log("app is running on port " + port);
});
