// index.html
// style.css
// script.js
// images/
// CDN => Fontawesome, Google Fonts
// req => https://fsd22i-demo.netlify.app/ => DNS => Convert URL => IP
// IP => Server => Found IP?
// res => index.html, style.css, images, script.js, CDN links
const http = require("http");
const { readFileSync } = require("fs");

const indexPage = readFileSync("./Course-Website/index.html", {
  encoding: "utf-8",
});
const stylePage = readFileSync("./Course-Website/css/style.css", {
  encoding: "utf-8",
});
const scriptPage = readFileSync("./Course-Website/js/index.js", {
  encoding: "utf-8",
});
const headerShape = readFileSync("./Course-Website/images/header-shape.svg", {
  encoding: "utf-8",
});
const publicJpg = readFileSync("./Course-Website/images/public.jpg", {
  encoding: "utf-8",
});

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexPage);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(stylePage);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(scriptPage);
    res.end();
  } else if (req.url === "/images/header-shape.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(headerShape);
    res.end();
  } else if (req.url === "/images/public.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.write(headerShape);
    res.end();
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
