/* Exercício 1: Criando um Gerador de Mensagens

Objetivo: Praticar a manipulação do DOM.

Descrição:

Crie uma página com um botão e um parágrafo. Toda vez que o usuário clicar no botão, o parágrafo deve mostrar uma mensagem aleatória de uma lista que você criou no seu código JavaScript.*/

// criando uma array com 5 frases 
let mensagens = [
    'Mensagem 1',
    'Mensagem 2',
    'Mensagem 3',
    'Mensagem 4',
    'Mensagem 5'
];

// criar uma function e dentro da function gerar um número aleatório para escolher uma mensagem do array
// A minha lista tem 5 itens mas o último número a ser contado é o número 4
 function gerarMensagem () {
let numeroDeMensagem = mensagens.length;

let numeroAleatorio = Math.floor(Math.random() * numeroDeMensagem);
let mensagemAleatoria = mensagens[numeroAleatorio];
document.getElementById('mensagem-aqui').textContent = mensagemAleatoria;

}

// adicionando um evento ao botão para que ele chame a function gerarMensagem
document.getElementById('gerar').addEventListener('click', gerarMensagem);