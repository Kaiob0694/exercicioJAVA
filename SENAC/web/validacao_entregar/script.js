document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirma = document.getElementById("confirma").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;

    let ok = true;

    
    if (nome.trim().length < 3) {
        document.getElementById("erroNome").innerText = "Nome precisa ter ao menos 3 caracteres.";
        ok = false;
    } else {
        document.getElementById("erroNome").innerText = "";
    }

    
    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        document.getElementById("erroEmail").innerText = "Digite um e-mail válido.";
        ok = false;
    } else {
        document.getElementById("erroEmail").innerText = "";
    }

    
    if (senha.length < 6) {
        document.getElementById("erroSenha").innerText = "A senha precisa ter no mínimo 6 caracteres.";
        ok = false;
    } else {
        document.getElementById("erroSenha").innerText = "";
    }

    
    if (telefone.trim().length < 10) {
        document.getElementById("erroTelefone").innerText = "Telefone precisa ter ao menos 10 dígitos.";
        ok = false;
    } else {
        document.getElementById("erroTelefone").innerText = "";
    }

    
    if (confirma !== senha) {
        document.getElementById("erroConfirma").innerText = "As senhas não coincidem.";
        ok = false;
    } else {
        document.getElementById("erroConfirma").innerText = "";
    }

    
    if (mensagem.trim() === "") {
        document.getElementById("erroMensagem").innerText = "A mensagem não pode ficar em branco.";
        ok = false;
    } else {
        document.getElementById("erroMensagem").innerText = "";
    }


    if (ok) {
        alert("Formulário enviado com sucesso!");
    }
});
