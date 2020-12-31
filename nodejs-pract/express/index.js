const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Health Check ok");
});
app.listen(4000, () => console.log("App is running on port 4000"));
