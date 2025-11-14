const readline = require('readline-sync');

let pizza_G = parseInt(readline.question("Quantas pizzas grandes? "))
let pizza_P = parseInt(readline.question("Quantas pizzas pequenas? "))

console.log( (pizza_G * 8) + (pizza_P * 4) - 2)