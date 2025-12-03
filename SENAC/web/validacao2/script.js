const campo = document.getElementById("nomeInput");
    const msg = document.getElementById("msgNome");

    campo.addEventListener("input", () => {
        const valor = campo.value.trim();

        if (valor.length >= 3) {
            campo.classList.remove("invalido");
            campo.classList.add("valido");
            msg.innerText = "✔ Nome válido";
            msg.style.color = "green";
        } else {
            campo.classList.remove("valido");
            campo.classList.add("invalido");
            msg.innerText = "✖ Digite ao menos 3 caracteres";
            msg.style.color = "red";
        }
    });