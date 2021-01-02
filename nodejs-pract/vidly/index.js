const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const collection = [
  { id: 1, Genre: "Shoes" },
  { id: 2, Genre: "Bags" },
  { id: 3, Genre: "Jeans" },
];

app.get("/", (req, res) => {
  res.send("Health Check ok");
});

app.get("/api/genre", (req, res) => {
  res.send(collection);
});

app.get("/api/genre/:id", (req, res) => {
  const genre = collection.find((data) => data.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Data is not present for this id");
  res.send(genre);
});

app.post("/api/genre/collection", (req, res) => {
  const { error } = inpValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const newData = { id: collection.length + 1, name: req.body.name };
  collection.push(newData);
  res.send("Data Added");
});

app.put("/api/genre/:id", (req, res) => {
  const genre = collection.find((data) => data.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Data is not present for this id");
  //   const { error } = inpValidation(req.body);
  //   if (error) return res.status(400).send(error.details[0].message);
  genre.Genre = req.body.Genre;
  res.send(genre);
});

app.listen(4000, (err) => {
  if (err) console.log(err);
  console.log("App is running on port 4000");
});

function inpValidation(data) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(data, schema);
}
