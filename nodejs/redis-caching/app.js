const express = require("express");
const app = express();
const redis = require("redis");
const axios = require("axios");
const port = 9300;

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

app.get("/output", (req, res) => {
  var userInput = req.query.country;
  const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`;

  return client.get(`wiki: ${userInput}`, (err, result) => {
    if (result) {
      const output = JSON.parse(result);
      res.send({ source: "Redis", output });
    } else {
      return axios.get(url).then((response) => {
        const output = response.data;
        client.setex(
          `wiki: ${userInput}`,
          3600,
          JSON.stringify({
            source: "API",
            output: output,
          })
        );
        res.send(output);
      });
    }
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running on ${port}`);
});
