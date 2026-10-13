function criarConta(saldoInicial) {
    let saldo = saldoInicial;
    return {
        verSaldo: () => {
            return saldo;
        },
        depositar: (valor) => {
            saldo += valor;
        }
    };
}

const conta1 = criarConta(100);
console.log(conta1.depositar(50)); // deposita 50 na conta
console.log(conta1.verSaldo()); // exibe o saldo atual da conta
console.log(conta1.depositar(-20)); // tenta depositar um valor negativo ficou 130 sem fazer o if por enquanto
console.log(conta1.verSaldo());