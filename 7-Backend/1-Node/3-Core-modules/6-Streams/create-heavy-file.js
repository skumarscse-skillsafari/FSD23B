const { writeFileSync } = require("fs");

for (let i = 1; i <= 15000; i++) {
  writeFileSync("./large-file.txt", `Line number: ${i}\n`, { flag: "a" });
}
