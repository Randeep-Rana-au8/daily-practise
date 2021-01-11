const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("User", userSchema);
function validateRegister(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string().min(5).required(),
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateRegister;
