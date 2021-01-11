const { User, validate } = require("../models/register");
const express = require("express");
const app = express();
const _ = require("lodash");

app.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists!!");

  //Normal object
  //   user = new User({
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });

  // object with lodash
  user = new User(_.pick(req.body, ["name", " email", "password"]));

  await user.save();
  res.send("User is registered");
});

module.exports = app;
