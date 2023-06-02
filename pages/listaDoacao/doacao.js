'use strict'

const criaListaDoacao = (data) => {

    const doador = document.createElement('div')
    doador.classList.add('funcionario')

    const informacoes = document.createElement('div')
    informacoes.classList.add('informacoes')

    const nome = document.createElement('p')
    nome.textContent = data.nome

    const email = document.createElement('p')
    email.textContent = data.email

    const valor = document.createElement('p')
    valor.textContent = data.valor

    const linha = document.createElement('div')
    linha.classList.add('linha')

    doador.append(informacoes, linha)
    informacoes.append(nome, email, valor)

    return doador
}