const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());
const datas = [
  {
    id: 1,
    name: "Randeep Rana",
  },
  {
    id: 2,
    name: "Suraj Rana",
  },
  {
    id: 3,
    name: "Deepanshu Rana",
  },
];

app.get("/", (req, res) => {
  res.send("Health Check ok");
});

app.get("/users", (req, res) => {
  res.send(datas);
});

app.post("/users", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.send(result.error.details[0].message);
    return;
  }
  const newUser = { id: datas.length + 1, name: req.body.name };
  datas.push(newUser);
  res.send("Data Added");
});

app.get("/user/:id", (req, res) => {
  const user = datas.find((data) => data.id === parseInt(req.params.id));
  if (!user) res.status(404).send("The user is not available for this id");
  res.send(user);
});

app.listen(4000, () => console.log("App is running on port 4000"));
