var express = require("express");
var app = express();
var port = process.env.PORT || 1000;

var menu = [
  { link: "/", name: "Home" },
  { link: "/hotels", name: "Hotels" },
  { link: "/location", name: "Location" },
];

app.use(express.static(__dirname + "./public"));

app.set("views", "./src/view");
app.set("view engine", "ejs");

//default route
app.get("/", (req, res) => {
  res.render("index", { menuitems: menu });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Website is running on port number " + port);
});
