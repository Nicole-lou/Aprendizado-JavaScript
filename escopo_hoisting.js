// escopo global
// {} -> Let e const -> escopo de bloco


let nivelPadrao = "visitante"; // variavel global
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

verificarDepartamento('TI');

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
