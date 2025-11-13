const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseInt(input.split(" ")[0])
let B = parseInt(input.split(" ")[1])

if (A === 0) {
  console.log("C");
} else if (B === 0) {
  console.log("B");
} else {
  console.log("A");
}