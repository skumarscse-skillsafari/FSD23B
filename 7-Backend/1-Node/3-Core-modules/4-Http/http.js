const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Welcome to Node.js</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>Welcome to Node.js About page</h1>");
    res.end();
  } else if (req.url === "/projects") {
    res.write("<h1>Welcome to Node.js Projects page</h1>");
    res.end();
  } else {
    res.write(`
        <h1>Page not found</h1>
        <a href="/">Back to home page</a>
    `);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
