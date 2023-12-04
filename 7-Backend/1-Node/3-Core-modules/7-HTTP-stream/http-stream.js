const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const stream = createReadStream("./large-file.txt", {
    encoding: "utf-8",
    highWaterMark: 75000,
  });
  stream.on("open", () => {
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    console.log(err);
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(5000, () => {
  console.log(`Server is running in: http://localhost:5000`);
});
