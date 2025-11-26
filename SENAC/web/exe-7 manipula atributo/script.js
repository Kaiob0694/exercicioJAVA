// Seleção de elementos
const titulo = document.getElementById("titulo");
const descricao = document.querySelector(".descricao");
const foto = document.getElementById("foto");
const botao = document.getElementById("botao");


// Evento de clique no botão
botao;addEventListener("click", function(){

    // modificação do conteudo
    titulo.textContent = "Titulo Alterado!";
    descricao.innerHTML = "<em>Agora o texto mudou e está em itálico<em>";

    //manipulaçõ de atributos
    foto.setAttribute("src",
        "https://i.pinimg.com/736x/86/b1/5b/86b15b8d604c79a153d0b7aad3697e10.jpg",
        width="300", height="300");
        foto.setAttribute("alt","Nova imagem");

        titulo.style.color = "red";
        titulo.style.fontSize = "28px";

        // Classe

        descricao.classList.toggle("ativo");        
    
})