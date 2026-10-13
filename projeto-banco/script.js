function criarConta(saldoInicial) {
    let saldo = saldoInicial;
    return {
        verSaldo: () => {
            return saldo;
            
        }
    }
}

const conta1 = criarConta(100);
console.log(conta1.verSaldo());