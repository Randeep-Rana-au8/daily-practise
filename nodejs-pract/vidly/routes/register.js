const { User, validate } = require("../models/register");
const express = require("express");
const app = express();
const _ = require("lodash");
const bcrypt = require("bcrypt");

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
  try {
    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send("User is registered");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app;
