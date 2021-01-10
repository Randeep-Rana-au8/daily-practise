const express = require("express");
const { Genre, validate } = require("../models/genre");
const { Movie } = require("../models/movies");
const app = express();

app.get("/", async (req, res) => {
  const movies = await Movie.find().sort("name");
  res.send(movies);
});

app.post("/", async (req, res) => {
  const { error } = validate();
  if (error) return res.status(400).send(error.details[0].message);
  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(404).send("No genre is there for this id");
  const movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
  });

  await movie.save();
  res.send(movie);
});

module.exports = app;
