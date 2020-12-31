const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Health Check ok");
});

app.get("/api", (req, res) => {
  res.send([
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
  ]);
});
app.listen(4000, () => console.log("App is running on port 4000"));
