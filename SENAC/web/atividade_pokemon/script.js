// Seleção de elementos
const pokemonName = document.getElementById("pokemon-name")
const botaoCharmander = document.getElementById("btn-pokemon-2")
const botaoSquirtle = document.getElementById("btn-pokemon-3")
const botaopikach = document.getElementById("btn-pokemon-1")
const pokemonImg = document.getElementById("pokemon-img")
const pokemon_tipo = document.getElementById("pokemon-type")
const attacks_list = document.getElementById("attacks-list")
const carta = document.getElementById("pokemon-card")
//--------------------------------------------------------------------------//


//Evendo de click
botaoCharmander.addEventListener("click", function(){
    pokemonImg.setAttribute("src", "img/charmander.png",
        width="300", height="300");

        pokemonName.textContent = "Charmander";
        // pokemonImg.style.border = "solid 5px rgba(192, 77, 1, 1)";
        carta.style.boxShadow = "0 32px 64px rgba(255, 106, 6, 0.2)"
        
        
        pokemon_tipo.textContent = "Fogo";
        attacks_list.children[0].textContent = "Smoke Screen";
        attacks_list.children[1].textContent = "Dragon Breath";
        attacks_list.children[2].textContent = "Fire Fang";
        attacks_list.children[3].textContent = "Fire Spin";


})


botaoSquirtle.addEventListener("click", function(){
    pokemonImg.setAttribute("src", "img/squirtle.png",
        width="300", height="300");

        pokemonName.textContent = "Squirtle";
        // pokemonImg.style.border = "solid 5px rgba(18, 0, 180, 1)";
        carta.style.boxShadow = "0 32px 64px rgba(0, 47, 255, 0.2)"
        pokemon_tipo.textContent = "Agua";
        attacks_list.children[0].textContent = "Tackle";
        attacks_list.children[1].textContent = "Water Gun";
        attacks_list.children[2].textContent = "Withdraw";
        attacks_list.children[3].textContent = "Skull Bash";


})


botaopikach.addEventListener("click", function(){
    pokemonImg.setAttribute("src", "img/pikachu.png",
        width="300", height="300");

        pokemonName.textContent = "Pikachu";
        // pokemonImg.style.border = "solid 5px rgba(162, 197, 3, 1)";
        carta.style.boxShadow = "0 32px 64px rgba(251, 255, 0, 0.2)"
        pokemon_tipo.textContent = "Elétrico";
        attacks_list.children[0].textContent = "Choque do Trovão";
        attacks_list.children[1].textContent = "Ataque Rápido";
        attacks_list.children[2].textContent = "Investida Elétrica";
        attacks_list.children[3].textContent = "Raio supremo";


})

