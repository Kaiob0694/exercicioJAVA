document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); // impede o envio para validar antes

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirma = document.getElementById("confirma").value;

    let ok = true;

    // Validar Nome
    if (nome.trim().length < 3) {
        document.getElementById("erroNome").innerText = "Nome precisa ter ao menos 3 caracteres.";
        ok = false;
    } else {
        document.getElementById("erroNome").innerText = "";
    }

    // Validar Email
    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        document.getElementById("erroEmail").innerText = "Digite um e-mail válido.";
        ok = false;
    } else {
        document.getElementById("erroEmail").innerText = "";
    }

    // Validar Senha
    if (senha.length < 6) {
        document.getElementById("erroSenha").innerText = "A senha precisa ter no mínimo 6 caracteres.";
        ok = false;
    } else {
        document.getElementById("erroSenha").innerText = "";
    }

    // Validar Confirmar Senha
    if (confirma !== senha) {
        document.getElementById("erroConfirma").innerText = "As senhas não coincidem.";
        ok = false;
    } else {
        document.getElementById("erroConfirma").innerText = "";
    }

    // Se tudo OK → envia
    if (ok) {
        alert("Formulário enviado com sucesso!");
        // Aqui você pode enviar o formulário de verdade:
        // document.getElementById("form").submit();
    }
});
