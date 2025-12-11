const input = require("readline-sync");

let A = parseFloat(input.question("Digite sua primeira nota: "))
let B = parseFloat(input.question("Digite sua Segunfa nota: "))

const soma = A + B;

if( soma/2 >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}