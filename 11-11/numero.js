const input = require("readline-sync");

let nome = input.question("Digite seu nome: ");
let idade = Number(input.question("Digite seu idade: "))
console.log("Seja bem vindo " + nome )
console.log("Daqui 5 anos você terá: ", idade  );
