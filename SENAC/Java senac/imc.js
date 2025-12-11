const readline = require('readline-sync')

function calcularIMC() {
    let peso = parseFloat(readline.question("Digite o seu peso: "))
    let altura = parseFloat(readline.question("Digite a sua altura (ex: 1.75): "))

    let imc = peso / (altura ** 2)
    return imc
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Você está abaixo do peso."
    } else if (imc < 25) {
        return "Você está com peso normal."
    } else if (imc < 30) {
        return "Você está com sobrepeso."
    } else if (imc < 35) {
        return "Você está com obesidade grau I."
    } else if (imc  < 40) {
        return "Você está com obesidade grau II."
    } else {
        return "Você está com obesidade grau III (grave)."
    }
}

let resultado = calcularIMC()
console.log("Seu IMC é:", resultado.toFixed(2))

let classificacao = classificarIMC(resultado)
console.log(classificacao)
