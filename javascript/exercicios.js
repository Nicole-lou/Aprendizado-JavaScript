//Construir uma página na qual o usuário digitará 2 números e o programa exibirá, na tela, o resultado das quatro operações  básicas da matemática.

// 1. pedir para o usuário vai escrever dois números
// 2. criar duas variáveis para receber os números
// 3. escrever o resultado das quatro operações básicas da matemática

let primeiroNumero = prompt('Digite o primeiro número:');
let segundoNumero = prompt('Digite o segundo número:');

let num1 = parseInt(primeiroNumero);
let num2 = parseInt(segundoNumero);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

alert('A soma é:' + soma);
alert('A subtração é:' - subtracao);
alert('A multiplicação é:' * multiplicacao); 
alert('A divisão é:' / divisao);
