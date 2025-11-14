const readline = require('readline-sync')

let numero =[];
for(let i = 0; i<10; i++){
    let n = Math.floor(Math.random()*100) + 1;
    numero.push(n)
}

console.log(numero)