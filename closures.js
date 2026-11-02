/*function init() {
    const nome = "Uma string";
    function mostrarNome() {
        console.log(nome);
    }
    mostrarNome();
}

init(); */

/*function init() {
    const nome = "Uma string";
    function mostrarNome() {
        console.log(nome);
    }
  return mostrarNome;
}

const minhaFuncao = init();
minhaFuncao(); */

//soma(2)(3)(5)(10)(4)(-1)();
function soma(num1) {
    return (num2) => {
        if(!num2) {
            return num1;
        }
        return soma(num1 + num2);
    }
}

console.log(soma(2)(3)() )




