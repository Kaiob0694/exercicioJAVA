const rs = require("readline-sync");

let N = rs.questionInt("Quantos dias tem a lista? ");

let soma = 0;
let dias = 0;

for (let i = 0; i < N; i++) {
    let acessos = rs.questionInt(`Acessos do dia ${i + 1}: `);
    soma += acessos;
    dias++;

    if (soma >= 1000000) {
        break;
    }
}

console.log(`Dias necessários: ${dias}`);
