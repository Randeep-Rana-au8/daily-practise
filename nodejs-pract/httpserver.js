const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hey i am working baby");
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("New Connection");
});

server.listen(3004);

console.log("Server is running on port 3004");
