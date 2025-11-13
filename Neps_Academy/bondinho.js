const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseInt(input.split("\n")[0]) // quantidade de alunos
let M = parseInt(input.split("\n")[1]) // quantidade de monitores

if (A + M <= 50){
    console.log("S");
}else {
    console.log("N");
}
