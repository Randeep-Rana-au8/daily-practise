const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/vidly", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const movieSchema = new mongoose.Schema({
  name: String,
  genre: Object,
  numberInStock: Number,
  dailyRentalRate: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

async function createMovie() {
  const movie = new Movie({
    name: "Sholay",
    genre: {
      name: "Entertainment",
    },
    numberInStock: 22,
    dailyRentalRate: 10,
  });
  const result = await movie.save();
  console.log(result);
}
createMovie();
