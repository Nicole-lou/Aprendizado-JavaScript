// escopo global
// {} -> Let e const -> escopo de bloco

function criarContador() {
    let valor = 0;

    return {
        incrementar: function() {
            valor = valor + 1;
            return valor;
        },

        resetar: function() {
            valor = 0;
            return valor;
        }
    };

    /*return function() {
        valor = valor + 1;
        return valor;
    }*/
}

const contador1 = criarContador();
console.log(contador1.incrementar());
console.log(contador1.incrementar());
console.log(contador1.incrementar());

//resetando o contador
console.log(contador1.resetar());
console.log(contador1.incrementar());
/*const contador1 = criarContador();
const contador2 = criarContador();
console.log(contador1()); 
console.log(contador1()); 
console.log(contador2()); 
console.log(contador1()); 
console.log(contador2());*/
/*console.log(contador1());
console.log(contador2());
console.log(contador1());
console.log(contador2());*/


/*console.log(x)
var x = 10; */

/*console.log(y)
let y = 10;*/

/*function teste() {
    console.log(a);
    var a = 5;
    console.log(a);
}
teste(); */

/*function saudacao() {
    console.log(mensagem());
    function mensagem() {
        return 'Olá, seja bem-vindo(a) ao curso de JavaScript!';
    }
}
saudacao(); */

/*let cor = "azul";
function mudarCor() {
  console.log(cor);
  let cor = "verde";
}
mudarCor(); */

/*for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}*/

/*let nivelPadrao = "visitante"; // variavel global
console.log(nivelPadrao);
const liberarAcesso = function() {
    console.log("Acesso liberado para: " + nivelPadrao);
}

liberarAcesso();

function verificarDepartamento(nomeDepto) {
    
    let nivelPadrao = "funcionario"; // variavel local
   

    function verificarUsuario(nomeUsuario) {
        console.log(nivelPadrao);
    }

    verificarUsuario();
}

verificarDepartamento('TI'); */

/*function externa() {
  const mensagem = "Olá da função externa";

  function interna() {
    console.log(mensagem); // consegue acessar, mesmo sem declarar aqui
  }

  interna(); // precisa chamar aqui dentro (ou retornar e chamar fora)
}

externa();

/*let nome = "Matheus"; // var no escopo global

function exibirNome() {
    console.log(nome);
}

exibirNome();

console.log("Nome: " + nome);

// escopo local -> {}
function exibirIdade() {
    const idade = 30; // var no escopo local
    console.log("Sua idade é: " + idade);
}

exibirIdade();

const idade = 30;

// escopo de bloco
if(true) {
    const idade = 15;
    console.log("Idade if: " + idade);
}

console.log("idade global: " + idade);

for(let i = 0; i < 5; i++) {
    const idade = 45;

    console.log("idade loop:" + idade);
}

//x = 10;
x;
console.log(x);
var x = 5;

console.log(x); */
