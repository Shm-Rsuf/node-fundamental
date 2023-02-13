const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request is arrived");
});

server.listen(port, localhost, () => {
  console.log("server is running...");
});
