const { readFile, writeFile } = require("fs");

readFile("./sample-text.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  let contentOne = data;
  readFile("./sample-text-1.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let contentTwo = data;
    writeFile(
      "./async-write/write.txt",
      `FILE-1: ${contentOne}\nFILE-2: ${contentTwo}\n`,
      { encoding: "utf-8", flag: "a" },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  });
});
