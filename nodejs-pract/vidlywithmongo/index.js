const express = require("express");
const Joi = require("joi");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/vidly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connect to the Database..."));
app.use(express.json());

const schema = new mongoose.Schema({
  _id: Number,
  Genre: String,
});

const Collection = mongoose.model("Collection", schema);

// const collection = [
//   { id: 1, Genre: "Shoes" },
//   { id: 2, Genre: "Bags" },
//   { id: 3, Genre: "Jeans" },
// ];

// async function addData() {
//   const product = new Collection({
//     _id: 3,
//     Genre: "Jeans",
//   });
//   const result = await product.save();
//   console.log(result);
// }

// addData();

app.get("/", (req, res) => {
  res.send("Health Check ok");
});

app.get("/api/genre", (req, res) => {
  async function getData() {
    const allCollections = await Collection.find({});
    res.send(allCollections);
  }
  getData();
});

app.get("/api/genre/:id", (req, res) => {
  async function getDataByid() {
    const genre = await Collection.find({ _id: req.params.id });
    if (genre.length <= 0)
      return res.status(404).send("Data is not present for this id");
    res.send(genre);
  }
  getDataByid();
});

app.post("/api/genre/collection", (req, res) => {
  const { error } = inpValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  async function addData() {
    const product = new Collection({
      _id: Math.random(),
      Genre: req.body.Genre,
    });
    const result = await product.save();
    res.send("Data Added");
  }

  addData();
});

app.put("/api/genre/:id", (req, res) => {
  async function updateData() {
    const genre = await Collection.findById(parseInt(req.params.id));
    if (!genre) return res.status(404).send("Data is not present for this id");
    const { error } = inpValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    genre.Genre = req.body.Genre;
    const result = await genre.save();
    res.send(result);
  }
  updateData();
});

app.delete("/api/genre/:id", (req, res) => {
  async function deleteData() {
    const genre = await Collection.findByIdAndDelete(parseInt(req.params.id));
    if (!genre) return res.status(404).send("Data is not present for this id");
    res.send("Data Deleted");
  }
  deleteData();
});

app.listen(4000, (err) => {
  if (err) console.log(err);
  console.log("App is running on port 4000");
});

function inpValidation(data) {
  const schema = {
    Genre: Joi.string().min(3).required(),
  };
  return Joi.validate(data, schema);
}
