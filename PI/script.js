/* ================= EFEITO DE DIGITAÇÃO NO INPUT ================= */
const textos = [
    "Lugares para visitar?",
    "Quais as melhores cachoeiras?",
    "Melhores lugares para comer?",
    "Quais são as comidas típicas?"
];

const input = document.getElementById("searchInput");
let textoIndex = 0;
let letraIndex = 0;
let apagando = false;

function typeEffect() {
    const textoAtual = textos[textoIndex];

    if (!apagando) {
        input.placeholder = textoAtual.slice(0, letraIndex++);
        if (letraIndex > textoAtual.length) {
            apagando = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        input.placeholder = textoAtual.slice(0, letraIndex--);
        if (letraIndex < 0) {
            apagando = false;
            textoIndex = (textoIndex + 1) % textos.length;
            letraIndex = 0;
        }
    }

    setTimeout(typeEffect, apagando ? 50 : 100);
}
typeEffect();

/* ================= SCROLL HORIZONTAL ARRASTÁVEL ================= */
const container = document.querySelector(".cachoeira");
let isDown = false;
let startX;
let scrollLeft;

const startDrag = (x) => {
    isDown = true;
    startX = x - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.scrollBehavior = "auto";
};

const drag = (x) => {
    if (!isDown) return;
    const walk = (x - startX) * 1.5; // ajusta a velocidade do arraste
    container.scrollLeft = scrollLeft - walk;
};

const stopDrag = () => {
    isDown = false;
    container.style.scrollBehavior = "smooth";
};

/* Eventos desktop */
container.addEventListener("mousedown", e => startDrag(e.pageX));
container.addEventListener("mousemove", e => drag(e.pageX));
container.addEventListener("mouseup", stopDrag);
container.addEventListener("mouseleave", stopDrag);

/* Eventos touch */
container.addEventListener("touchstart", e => startDrag(e.touches[0].pageX));
container.addEventListener("touchmove", e => drag(e.touches[0].pageX));
container.addEventListener("touchend", stopDrag);

/* Bloqueia scroll vertical acidental */
container.addEventListener("wheel", e => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
    }
}, { passive: false });

/* ================= ANIMAÇÕES GSAP ================= */
gsap.registerPlugin(ScrollTrigger);

/* Header entra do topo */
gsap.from(".header", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

/* Hero fade-in */
gsap.from(".hero", {
    opacity: 0,
    duration: 2,
    ease: "power2.out"
});

/* Títulos da seção "Cachoeira" */
gsap.from("#titulo h1, #titulo h3, #titulo p", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#titulo",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

/* Cards da seção "Cachoeira" */
gsap.from("#card-turismo .card", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#card-turismo",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

/* Hotéis */
gsap.from(".hotel-cards img", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hoteis",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
