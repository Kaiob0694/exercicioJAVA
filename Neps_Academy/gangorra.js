const readline =require('readline-sync')

let P1 = parseInt(readline.question("Digite o primeiro numero: ")); // peso da primeira criança
let C1 = parseInt(readline.question("Digite o segundo numero: ")); // comprimento
let P2 = parseInt(readline.question("Digite o primeiro numero: ")); // Peso da segunda criança
let C2 = parseInt(readline.question("Digite o segundo numero: ")); // comprimento


if (P1 * C1 === P2 * C2){
    console.log("0")
}else{
    console.log("1")
}
