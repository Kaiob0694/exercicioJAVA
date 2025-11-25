console.log("le o js")
const botao = document.getElementById("meuBotao");

botao.addEventListener("mouseover", ()=>{
    botao.style.backgroundColor = "lightgreen";
});
botao.addEventListener("mouseout", ()=>{
    botao.style.backgroundColor = "";
});