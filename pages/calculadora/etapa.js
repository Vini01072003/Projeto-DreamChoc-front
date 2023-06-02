"use strict"

// Seleciona todos os elementos com a classe "etapa" e armazena em uma variável
var etapas = document.querySelectorAll(".etapa");

// Para cada elemento com a classe "etapa"
etapas.forEach(etapa => {
    // Adiciona um evento de clique ao elemento
    etapa.addEventListener("click", function () {
        // Obtém a segunda classe do elemento clicado e armazena em uma variável
        const etapaClicada = this.classList[1];
        // Seleciona o elemento que corresponde à classe "imagem-{etapaClicada}"
        const divCorrespondente = document.querySelector(`.imagem-${etapaClicada}`);

        // Para cada elemento com a classe "etapa"
        etapas.forEach(etapa => {
            // Seleciona o elemento com a classe "circulo" dentro da etapa
            const circulo = etapa.querySelector(".circulo");
            // Seleciona o elemento com a classe "escrita" dentro da etapa
            const escrita = etapa.querySelector(".escrita");

            // Remove a classe "circulo-verde" do elemento com a classe "circulo"
            circulo.classList.remove("circulo-verde");
            // Remove a classe "escrita-etapa" do elemento com a classe "escrita"
            escrita.classList.remove("escrita-etapa");
        });

        // Define o estilo "display: flex" para a div correspondente à etapa clicada
        divCorrespondente.style.display = "flex";
        // Adiciona a classe "circulo-verde" ao elemento com a classe "circulo" dentro da etapa clicada
        this.querySelector(".circulo").classList.add("circulo-verde");
        // Adiciona a classe "escrita-etapa" ao elemento com a classe "escrita" dentro da etapa clicada
        this.querySelector(".escrita").classList.add("escrita-etapa");

        // Para cada elemento com a classe "etapa"
        etapas.forEach(etapa => {
            // Se o elemento não for igual ao elemento clicado
            if (etapa !== this) {
                // Obtém a segunda classe do elemento
                const etapaAnterior = etapa.classList[1];
                // Seleciona o elemento que corresponde à classe "imagem-{etapaAnterior}"
                const divAnterior = document.querySelector(`.imagem-${etapaAnterior}`);
                // Define o estilo "display: none" para a div anterior
                divAnterior.style.display = "none";
            }
        });
    });
});


var botoesProximoPasso = document.querySelectorAll("#button-eletrica, #button-gas, #button-transporte");

botoesProximoPasso.forEach(botao => {
    botao.addEventListener("click", function () {
        const etapaAtual = this.parentNode.parentNode;
        const proximaEtapa = etapaAtual.nextElementSibling; 

        etapaAtual.style.display = "none";

        if (proximaEtapa) {
            proximaEtapa.style.display = "flex";

            etapas.forEach(etapa => {
                const circulo = etapa.querySelector(".circulo");
                const escrita = etapa.querySelector(".escrita");
                circulo.classList.remove("circulo-verde");
                escrita.classList.remove("escrita-etapa");
            });        
        }
    });
});

