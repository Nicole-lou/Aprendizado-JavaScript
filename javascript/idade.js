// Calculadora de idade em JavaScript
// Cria uma variável para o ano atual e outra para o ano de nascimento. O programa deve calcular e imprimir a idade no console.

//let anoAtual = 2025;
//let anoNascimento = 1990;
//let idade = anoAtual - anoNascimento;
//console.log(idade);

/*let anoAtual = Number(prompt("Digite o ano atual:"));
let anoNascimento = Number(prompt("Digite o seu ano de nascimento:"));
let idade = anoAtual - anoNascimento;
alert("Sua idade é: " + idade + " anos."); */


function calcularIdade() {
    const anoAtual = document.getElementById("anoAtual").value;
    const anoNascimento = document.getElementById("anoNascimento").value;
    const meuModal = document.getElementById("meuModal");
    const overlay = document.getElementById("overlay");
    const texto = document.getElementById("resultadoIdade");

    if (anoAtual === "" || anoNascimento === "") {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    const idade = anoAtual - anoNascimento;

    texto.innerText = `Sua idade é: ${idade} anos.`;    
    meuModal.style.display = "block";
    overlay.style.display = "block";

}

function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";

}
