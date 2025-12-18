// exercício para verificar se um número é par ou ímpar
/*let numero = 15;
 if (numero % 2 === 0) {
    console.log('O número ' + numero + ' é par');
 } else {
    console.log('O número ' + numero + ' é ímpar');
 } */

/*let entrada = prompt('Digite um número: ');
let numero = parseInt(entrada);

if (isNaN(numero)) {
    alert('Por favor, digite um número válido.');
} else if (numero % 2 === 0) {
   alert('O número ' + numero + ' é Par');
} else {
    alert('O número ' + numero + ' é Ímpar');
} */

    function verificarParouImpar() {
        const input = document.getElementById('numeroInput').value;
        const modal = document.getElementById('modal');
        const overlay = document.getElementById('overlay');
        const resultado = document.getElementById('resultadoTitulo');
        const mensagem = document.getElementById('resultadoMensagem');
        

        

        const valor = Number(input.value);

        if (input.value === '') {
            alert('Por favor, digite um número.');
            return
        }

        if (valor % 2 === 0) {
            titulo.innerText = 'Número Par';
           titulo.style.color = '#27AE60';
           mensagem.innerText = 'O número ' + valor + ' é Par.';
        } else {
           titulo.innerText = 'Número Ímpar';
            titulo.style.color = '#E74C3C';
            mensagem.innerText = 'O número ' + valor + ' é Ímpar.';
        }
        modal.style.display = 'block';
        overlay.style.display = 'block';

    }
     function fechar() {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('numeroInput').value = '';
     }