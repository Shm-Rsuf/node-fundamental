require("dotenv").config();

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header
  res.setHeader("Content-Type", "text/html");

  //set routes
  let path = "./html/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;
    default:
      path += "not-found.html";
      res.statusCode = 404;
      break;
  }
  //sent html file to the client
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

//PORT
const PORT = process.env.PORT || 8000;
server.listen(PORT, "localhost", () => {
  console.log("server is running...");
});
