const { User, validate } = require("../models/register");
const express = require("express");
const app = express();
const Joi = require("joi");

app.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();
  res.send("User is registered");
});

module.exports = app;
