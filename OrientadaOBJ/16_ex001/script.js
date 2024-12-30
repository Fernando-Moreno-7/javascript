class Conta{
    constructor(saldo){
        this.saldo = saldo;

    }
    depositar(valor){
        this.saldo +=valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
}
let conta = new Conta(1000);
conta.depositar(1000);
console.log(conta.saldo)

conta.sacar(500);
console.log(conta.saldo);