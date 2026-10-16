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
       /* sacar: (valor) => {
            if (valor > 0 && valor <= saldo) {
                return saldo -= valor;
            }
            else {
                return "Saldo insuficiente";
            } */
    }
    }


const conta1 = criarConta(100);
console.log(conta1.sacar(30));    
console.log(conta1.sacar(200));   
console.log(conta1.sacar(-10));   
console.log(conta1.verSaldo());  