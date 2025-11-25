// Pegando os elementos do HTML
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const botao = document.getElementById("botao");

// Adicionar um evento de clique
botao.addEventListener("click",function(){
    titulo.innerText ="O texto foi alterado ";
    titulo.style.color ="blue";

    descricao.innerText = "Agora o titulo e o texto foram modificados pelo JavaScreipt";
})