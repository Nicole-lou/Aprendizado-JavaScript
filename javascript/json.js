// função que será chamado quando o botão buscar for clicado
function buscarFato () { 
    // usando fetch para fazer a requisição HTTP
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => {
        // a resposta vem em json, então precisamos converter
        return response.json()
    })
    .then(data => {
        // pegando a informação que eu quero
        let fato = data.text;

        // manipulando o DOM para mostrar o fato
        let elementoFato = document.getElementById('fato-do-dia');
        elementoFato.textContent = fato;
    })
   .catch(error => {
    //caso algo dê errado vai exibir essa mensagem de erro
        console.error('Erro ao buscar fato:', error);
    });
    
}