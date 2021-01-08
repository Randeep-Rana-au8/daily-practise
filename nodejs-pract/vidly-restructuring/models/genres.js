const Joi = require("joi");
const mongoose = require("mongoose");
const Genre = mongoose.model(
  "Collection",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}
module.exports.Genre = Genre;
module.exports.validate = validateGenre;
