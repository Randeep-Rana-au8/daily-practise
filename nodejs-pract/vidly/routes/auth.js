const express = require("express");
const route = express();
const bcrypt = require("bcrypt");
const { User } = require("../models/register");
const Joi = require("joi");

route.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email or password");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or password");

    return res.send(true);
  } catch (err) {
    return res.send(err.message);
  }
});

function validateUser(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  };

  return Joi.validate(req, schema);
}

module.exports = route;
