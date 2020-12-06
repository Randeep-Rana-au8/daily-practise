const express = require("express");
const mongo = require("mongodb");
const app = express();
const MongoClient = mongo.MongoClient;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongourl = "mongodb://localhost:27017";
const port = process.env.PORT || 9000;

let db;
let col_name = "users";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hey I am from Rest Api folder and I am working");
});

app.get("/users", (req, res) => {
  var query = {};
  if (req.header("x-access-token") == "iamvaliduser") {
    if (req.query.city) {
      query = { city: req.query.city };
    } else if (req.query.id) {
      query = { _id: Number(req.query.id) };
    } else {
      query = { isActive: true };
    }

    db.collection(col_name)
      .find(query)
      .toArray((err, result) => {
        if (err) throw err;
        res.status(200).send(result);
      });
  } else {
    console.log("you are not allowed");
    res.send("You are not allowed");
  }
});

app.post("/users", (req, res) => {
  db.collection(col_name).insert(req.body, (err, result) => {
    if (err) throw err;
    res.send("Data Added");
  });
});

MongoClient.connect(mongourl, (err, connection) => {
  if (err) console.log(err);
  db = connection.db("decMongoPractise");
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Application is running on port ${port}`);
  });
});
