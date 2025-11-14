// A variável input contém a entrada descrita no exercício
const readline = require('readline-sync')

let texto = ("NepsAcademy eh Sucesso")
let vezes = parseInt(readline.question("Numero de repeticoes: "));
for (let i = 0; i < vezes; i++) {
    console.log(texto)
}