var express = require("express");
var app = express();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var bodyParser = require("body-parser");
var cors = require("cors");
var ejs = require("ejs");
const { static } = require("express");
var mongoUrl = "mongodb://localhost:27017";
let db;
var port = process.env.PORT || 8009;

app.use(express.static(__dirname + "/public"));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Health Check OK");
});

app.get("/users", (req, res) => {
  db.collection("users")
    .find({ isActive: true })
    .toArray((err, result) => {
      res.render("main", { result });
    });
});

app.get("/addUser", (req, res) => {
  res.render("index");
});

app.post("/addUser", (req, res) => {
  db.collection("users").insert({
    _id: req.body._id,
    name: req.body.name,
    city: req.body.city,
    isActive: true,
  });
  res.redirect("/users");
});

app.get("/delete", (req, res) => {
  console.log("I am in get method of delete ");
  res.render("delete");
});

app.delete("/deleteUser", (req, res) => {
  console.log("I am in delete method", req.body);
  db.collection("users").remove({ name: req.body.name });
  res.redirect("/users");
});

MongoClient.connect(mongoUrl, (err, connection) => {
  if (err) throw err;
  db = connection.db("decMongoPractise");
  app.listen(port, (err) => {
    if (err) throw err;
    console.log("App is running on port " + port);
  });
});
