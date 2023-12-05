const http = require("http");

const server = http.createServer((req, res) => {
  // /
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  }
  // /about
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // /projects
  else if (req.url === "/projects") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Projects Page</h1>");
    res.end();
  }
  // /contact
  else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  }
  // error
  else {
    res.writeHead(400, { "content-type": "text/html" });
    res.write(`<h1>Page not found</h1>
    <a href="/">Back to home page</a>
    `);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
