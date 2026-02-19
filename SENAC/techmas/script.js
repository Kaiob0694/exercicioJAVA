// Menu Mobile
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Botão Saiba Mais
const botao = document.getElementById("btn-alerta");

botao.addEventListener("click", () => {
    alert("Bem-vindo ao futuro da tecnologia 🚀");
});
