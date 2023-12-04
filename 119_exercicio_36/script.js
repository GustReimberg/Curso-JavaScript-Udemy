class ContaBanco {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(depo) {
        console.log(`você depositou ${depo} reais.`);
        this.saldo += depo;
        
    }

    saque(saq) {
        this.saldo -= saq;
    }
}


let contaBanco = new ContaBanco(1000);

contaBanco.deposito(1000);

console.log(contaBanco.saldo);

contaBanco.saque(500);

console.log(contaBanco.saldo)