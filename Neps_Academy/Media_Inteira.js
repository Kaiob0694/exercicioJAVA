const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseInt(input.split("\n")[0])
let B = parseInt(input.split("\n")[1])

console.log(Math.floor((A + B) / 2));
