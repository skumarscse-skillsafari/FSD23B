const http = require("http");

// const server = http.createServer((req, res) => {
//   // "/"
//   res.write("<h1>Home Page</h1>");
//   res.end();
// });

const server = http.createServer();

server.on("request", (req, res) => {
  res.write("<h1>Home Page</h1>");
  res.end();
});

server.listen(5000, () => {
  console.log(`Server is running in: http://localhost:5000`);
});
