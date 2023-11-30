// commonJS => require("")
// module => import
const { readFileSync, writeFileSync } = require("fs");

const content = readFileSync("./sample-text.txt", { encoding: "utf-8" });
const contentTwo = readFileSync("./sample-text-1.txt", { encoding: "utf-8" });

console.log(content);

writeFileSync(
  "./sync-write/write.txt",
  `The content from FILE-1: ${content} and \nFILE-2: ${contentTwo}\n`,
  { flag: "a" }
);
