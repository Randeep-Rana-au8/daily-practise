import express from "express";
import mongodb, { connect } from "mongodb";
const MongoClient = mongodb.MongoClient;
const app = express();
const port = process.env.PORT || 9884;
const url = "mongodb//:localhost:27017";
const dbName = "decMongoPractise";

app.get("/", (req, res) => {
  res.send("Health OK");
});

app.get("/users", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    var dbo = client.db(dbName);
    dbo
      .collection("users")
      .find({})
      .toArray((err, result) => {
        if (err) console.log(err);
        var output = result;
        res.send(output);
      });
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${port}`);
});
