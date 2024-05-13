// console.log(process.argv[2]);

const fs = require("fs");

const input = process.argv;

if (input[2] == "add") {
  fs, fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs, fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}
