const readline = require('readline-sync')

let valorFinal

function calcularDesconto() {
    let valorTotal = parseFloat(readline.question("Digite o valor total da compra: "))
    let porcentagem = parseFloat(readline.question("Digite a porcentagem de desconto: "))

    let desconto = valorTotal * (porcentagem / 100)
    valorFinal = valorTotal - desconto
    
    if (desconto>= valorTotal){
        console.log("Desconto acima do permitido!!")
    }
}

calcularDesconto()

console.log("Valor final da compra: R$ " + valorFinal.toFixed(2))
