const { createReadStream } = require("fs");

// Chunks => Buffers => 65486 bytes => 64 KB
// highWaterMark - 64 KB (default)
const stream = createReadStream("./large-file.txt", {
  encoding: "utf-8",
  highWaterMark: 100000,
});

// console.log(stream);

stream.on("data", (content) => {
  console.log(content);
});

stream.on("error", (err) => {
  console.log(err);
});
