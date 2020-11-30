const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>He I am running</h1>");
  res.end();
});

server.listen(9000);
