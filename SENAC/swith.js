const input = require("readline-sync")
let estacao = Number(input.question("Digite um nuemro de 1 a 4: "));

switch (estacao) {
    case 1:
        console.log("Primavera");
        break
    case 2:
        console.log("Verão");
        break
    case 3:
        console.log("Outono");
        break
    case 4:
        console.log("Inverno");
        break
    default:
        console.log("Valor fora da caixa!")

}