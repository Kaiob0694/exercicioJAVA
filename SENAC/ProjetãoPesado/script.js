function carregarDados() {

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "Carregando informações...";

    // Simulação de processamento pesado
    let lista = [];

    for (let i = 0; i < 1000000; i++) {
        lista.push("Ordem " + i);
    }

    setTimeout(function() {
        resultado.innerHTML = "Dados carregados com sucesso!";
    }, 2000);
}
