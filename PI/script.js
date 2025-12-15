

const textos = [
    "Lugares para Visitar?",
    "Quais as melhores cachueiras?",
    "Melhores lugares para comer?",
    "Quais são as Comidas Típicas?"
];

let textoIndex = 0;   // qual frase está sendo usada
let letraIndex = 0;  // qual letra está sendo digitada
const input = document.getElementById("searchInput");

function typeEffect() {
    const textoAtual = textos[textoIndex];

    input.placeholder = textoAtual.slice(0, letraIndex);

    letraIndex++;
    
    if (letraIndex <= textoAtual.length) {
        setTimeout(typeEffect, 100); // velocidade da digitação
    } else {
        setTimeout(() => {
            letraIndex = 0;
            textoIndex = (textoIndex + 1) % textos.length; // passa para a próxima frase
            typeEffect();
        }, 1500); // pausa antes de mudar para a próxima frase
    }
}

typeEffect();

const cachoeira = document.querySelector('.cachoeira');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cachoeira.classList.add('show');
        } else {
            cachoeira.classList.remove('show');
        }
    });
}, {
    threshold: 0.2
});

observer.observe(cachoeira);
