const readline = require('readline-sync');

let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  let num = parseInt(readline.question(`Digite o ${i + 1} numero: `));
  numeros.push(num);
  soma += num;
}

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log("\nNúmeros digitados:", numeros);
console.log("Maior número:", maior);
console.log("Menor número:", menor);
console.log("Soma:", soma);
console.log("Média:", (soma / numeros.length).toFixed(2));
