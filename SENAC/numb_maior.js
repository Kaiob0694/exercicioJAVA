const readline = require('readline-sync')

function maiorNumero(n1, n2, n3){
    return Math.max(n1, n2, n3);
}

let num1 = parseFloat(readline.question("Digite o PRIMEIRO numero: "))
let num2 = parseFloat(readline.question("Digite o SEGUNDO numero: "))
let num3 = parseFloat(readline.question("Digite o TERCEIRO numero: "))

let resultado =maiorNumero(num1, num2, num3);
console.log("O maior numero é ", resultado)
