const readline = require('readline-sync');

let leite_min = parseInt(readline.question("Quantidade minima de leite(ml):  "))
let leite_mix = parseInt(readline.question("Quantidade maxima de leite(ml):  "))
let cap_xicara = parseInt(readline.question("Tamanho da xicara(ml): "))
let cafe = 30

// conta
if(cap_xicara - cafe < leite_min){
    console.log("N")
}else if(cap_xicara - cafe <= leite_mix){
    console.log("S")
}


