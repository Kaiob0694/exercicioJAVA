const readline = require('readline-sync')

function calcularMedia (){
    let nota1 = parseFloat(readline.question("Digite a PRIMEIRA nota: "))
    let nota2 = parseFloat(readline.question("Digite a SEGUNDA nota: "))

    let media = ((nota1 + nota2) / 2)
    console.log("Sua media é " + media.toFixed(2))
    if(media>= 7){
        console.log("Aluno APROVADO")        
    }else{
        console.log("Aluno REPROVARO")
    }
}

calcularMedia()

