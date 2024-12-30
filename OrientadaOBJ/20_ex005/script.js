class Conta{
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca){
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupanca = saldoContaPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }
    depositar(valor){
        this.saldoContaCorrente += valor;
    }
    saque(valor){
        this.saldoContaCorrente -= valor;
    }
    tranferenciaCP(valor){
        this.saldoContaCorrente += valor;
        this.saldoContaPoupanca += valor;
    }
    tranferenciaCC(valor){
        this.saldoContaPoupanca += valor;
        this.saldoContaCorrente += valor;
    }
    jurosAniversario(){
        let juros = (this.saldoContaPoupanca * this.jurosPoupanca) / 100;
        this.saldoContaPoupanca += juros;
    }
    
}
class ContaEspecial extends Conta{
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca){
        super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca, juros*2)
    }
}
let conta = new Conta(1000, 500, 1);
console.log(conta);
conta.depositar(10);
console.log(conta);
conta.saque(20);
console.log(conta);
tranferenciaCP(3000);
console.log(conta);
conta.jurosAniversario();
console.log(conta)
let conta2 = new ContaEspecial(1000, 500, 2);