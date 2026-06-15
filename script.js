const musica = document.getElementById("musica");

function abrirInformacoes(){

    musica.volume = 0.08;

    musica.play().catch((erro)=>{
        console.log(erro);
    });

    document
        .getElementById("principal")
        .classList.remove("ativa");

    document
        .getElementById("informacoes")
        .classList.add("ativa");
}

function abrirPresentes(){

    document
        .getElementById("informacoes")
        .classList.remove("ativa");

    document
        .getElementById("presentesTela")
        .classList.add("ativa");
}

function voltarInformacoes(){

    document
        .getElementById("presentesTela")
        .classList.remove("ativa");

    document
        .getElementById("informacoes")
        .classList.add("ativa");
}

function confirmarPresenca(){

    window.open(
        "https://wa.me/55021988732110?text=Olá! Confirmo minha presença na festa.",
        "_blank"
    );
}

function abrirLocalizacao(){

    window.open(
        "https://share.google/6yUrAaE8rh4NJ8tyg",
        "_blank"
    );
}