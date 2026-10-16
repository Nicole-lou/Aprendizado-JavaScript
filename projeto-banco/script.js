function criarConta(saldoInicial) {
    let saldo = saldoInicial;
    return {
        verSaldo: () => {
            return saldo;
        },
        depositar: (valor) => {
            if (valor > 0) {
                return saldo += valor;
            }
            return "Valor inválido para depósito";
        },
        sacar: (valor) => {
    if (valor <= 0) {
        return "Valor inválido para saque";
    }
    if (valor > saldo) {
        return "Saldo insuficiente";
    }
    return saldo -= valor;
}
    }
    }


const contaAna = criarConta(500);
const contaBia = criarConta(100);

console.log(contaAna.depositar(200));
console.log(contaBia.sacar(30));
console.log(contaBia.sacar(500));
console.log(contaAna.verSaldo());
console.log(contaBia.verSaldo());