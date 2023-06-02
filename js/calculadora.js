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


/*************************   CALCULO DE CO2       ************************************/

function formatarValorReais() {
    var campoValor = document.getElementById("valor-eletrica"); // Obtém o elemento do input de valor da conta
    var valor = campoValor.value.replace(/\D/g, ''); // Remove caracteres não numéricos do valor digitado
    var valorFormatado = (Number(valor) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Converte o valor para formato de moeda brasileira
    campoValor.value = valorFormatado; // Atualiza o valor do input com o valor formatado em reais
}

function calcularEmissoesEletricidade() {
    var campoValor = document.getElementById("valor-eletrica"); // Obtém o elemento do input de valor da conta
    var valor = parseFloat(campoValor.value.replace(/[^\d,]/g, '').replace(',', '.')); // Remove caracteres não numéricos, exceto vírgula e ponto, e converte o valor para um número de ponto flutuante

    var emissoesMensais = valor * 0.0013; // Calcula as emissões mensais multiplicando o valor por 0.0013 (exemplo hipotético)
    var emissoesAnuais = emissoesMensais * 12; // Calcula as emissões anuais multiplicando as emissões mensais por 12 meses

    // Atualiza os spans com os novos valores formatados
    document.getElementById("emissoes_mensais-eletricidade").textContent = emissoesMensais.toFixed(4); // Atualiza o valor das emissões mensais com 4 casas decimais
    document.getElementById("emissoes_anuais-eletricidade").textContent = emissoesAnuais.toFixed(4); // Atualiza o valor das emissões anuais com 4 casas decimais
}

function calcularEmissaoTransporte() {
    var campoQuilometragem = document.getElementById("valor-transporte"); // Obtém o elemento do input de quilometragem
    var quilometragem = parseFloat(campoQuilometragem.value.replace(/[^\d]/g, '')); // Remove caracteres não numéricos, exceto ponto, e converte o valor para um número de ponto flutuante

    var emissoesMensais = quilometragem * .0019; // Calcula as emissões mensais multiplicando a quilometragem por 0.0019 (exemplo hipotético)
    var emissoesAnuais = emissoesMensais * 12; // Calcula as emissões anuais multiplicando as emissões mensais por 12 meses

    // Atualiza os spans com os novos valores formatados
    document.getElementById("emissoes_mensais_transporte").textContent = emissoesMensais.toFixed(2); // Atualiza o valor das emissões mensais formatado
    document.getElementById("emissoes_anuais_transporte").textContent = emissoesAnuais.toFixed(2); // Atualiza o valor das emissões anuais formatado
}

function formatarInputTransporte() {
    var campoValor = document.getElementById("valor-transporte"); // Obtém o elemento do input
    var valor = campoValor.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos do valor digitado

    // Divide o valor em parte inteira e parte decimal
    var parteInteira = valor;
    var parteDecimal = '';

    // Verifica se há casas decimais
    if (valor.indexOf('.') !== -1) {
        var partes = valor.split('.');
        parteInteira = partes[0];
        parteDecimal = partes[1];
    }

    // Formata a parte inteira com ponto a cada três dígitos
    parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Atualiza o valor do input com o valor formatado
    campoValor.value = parteInteira + (parteDecimal ? '.' + parteDecimal : '');
}

function calcularEmissaoGases() {
    var campoBotijoes = document.getElementById("valor-gas"); // Obtém o elemento do input de quantidade de botijões
    var quantidadeBotijoes = parseFloat(campoBotijoes.value.replace(/[^\d.]/g, '')); // Remove caracteres não numéricos, exceto ponto, e converte o valor para um número de ponto flutuante

    var emissoesMensais = quantidadeBotijoes * 0.05; // Calcula as emissões mensais multiplicando a quantidade de botijões por 0.05 (exemplo hipotético)
    var emissoesAnuais = emissoesMensais * 12; // Calcula as emissões anuais multiplicando as emissões mensais por 12 meses

    // Atualiza os spans com os novos valores formatados
    document.getElementById("emissoes_mensais_gases").textContent = emissoesMensais.toFixed(4); // Atualiza o valor das emissões mensais formatado
    document.getElementById("emissoes_anuais_gases").textContent = emissoesAnuais.toFixed(4); // Atualiza o valor das emissões anuais formatado
}

function formatarInputGas() {
    var campoValor = document.getElementById("valor-gas"); // Obtém o elemento do input
    var valor = campoValor.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos do valor digitado

    // Atualiza o valor do input com o valor formatado
    campoValor.value = valor;
}

function formatarResultado() {

    let emissoesEletricidade = document.getElementById("emissoes_anuais-eletricidade").textContent
    let emissoesGas = document.getElementById("emissoes_anuais_gases").textContent
    let emissoesTrasnporte = document.getElementById("emissoes_anuais_transporte").textContent

    let quantidadeEmissaoEletrica = document.getElementById("qtd-emissao-eletrica").textContent = emissoesEletricidade
    let quantidadeEmissaoGas = document.getElementById("qtd-emissao-gas").textContent = emissoesGas
    let quantidadeEmissaoTrasnporte = document.getElementById("qtd-emissao-transporte").textContent = emissoesTrasnporte

    let calculoTotal = Number(quantidadeEmissaoEletrica) + Number(quantidadeEmissaoGas) + Number(quantidadeEmissaoTrasnporte)

    let emissoesTotal = document.getElementById("emissao-total").textContent = calculoTotal.toFixed(2)

    // Calcula e atualiza as porcentagens de emissões
    const porcentagemEletricidade = (quantidadeEmissaoEletrica / emissoesTotal) * 100;
    const porcentagemGas = (quantidadeEmissaoGas / emissoesTotal) * 100;
    const porcentagemTransporte = (quantidadeEmissaoTrasnporte / emissoesTotal) * 100;

    document.getElementById("porcentagem-emissao-eletrica").textContent = porcentagemEletricidade.toFixed(2) + "%";
    document.getElementById("porcentagem-emissao-gas").textContent = porcentagemGas .toFixed(2)+ "%";
    document.getElementById("porcentagem-emissao-tranporte").textContent = porcentagemTransporte.toFixed(2)+ "%";
    document.getElementById("porcentagem-emissao-total").textContent = "100%";

    console.log(emissoesTotal);

    let areaQuadrada = Number(emissoesTotal) / 0.5

    document.getElementById("metro-quadrado").textContent = areaQuadrada.toFixed(1)

    let TotalArvores = Number(areaQuadrada) / 6
    
    document.getElementById("total-arvores").textContent = TotalArvores.toFixed(0)

    console.log(TotalArvores)

    let valorCompensar = Number(TotalArvores.toFixed(0)) * 20 

    document.getElementById("valor-compensar").textContent = valorCompensar.toFixed(0)
}
