class ContaBancaria {
    constructor(saldoCC, saldoCP, jurosP){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.jurosP = jurosP;

    }

    consulta(Conta){
        if (Conta === 'CC'){
            console.log(`O valor em sua conta corrente é de R$${this.saldoCC}`);        
         }
         else if (Conta === 'CP'){
            console.log(`O valor em sua conta Poupança é de R$${this.saldoCP}`);      
         }
         else {
            console.log('Conta não encontrada');
         }
    }
    
    deposito(valorDeposito, Conta){
        if (Conta === 'CC'){
            this.saldoCC += valorDeposito;
            console.log(`O deposito de R$${valorDeposito} foi realizado na conta corrente, novo saldo R$${this.saldoCC}`);
        }
        else if (Conta === 'CP'){
            this.saldoCP += valorDeposito;
            console.log(`O deposito de R$${valorDeposito} foi realizado na conta poupança, novo saldo R$${this.saldoCP}`);
        }
        else {
            console.log('Conta não encontrada');
        }
    }

    saque(ValorSaque, Conta){
        if (Conta === 'CC'){
            this.saldoCC -= ValorSaque;
            console.log(`O saque de R$${ValorSaque} foi realizado na conta corrente, novo saldo R$${this.saldoCC}`);
        }
             else if (Conta === 'CP'){
                this.saldoCP -= ValorSaque;
                console.log(`O saque de R$${ValorSaque} foi realizado na conta poupança, novo saldo R$${this.saldoCP}`);
            }
    }
    
    jurosContaP(meses){
        const juros = this.saldoCP * (this.jurosP / 100) * meses;
        this.saldoCP += juros;
        console.log(`Juros de Poupança de R$${juros.toFixed(2)} aplicados. Novo saldo na poupança: R$${this.saldoCP.toFixed(2)}`)
    }
 
    transferencia(valor, deconta, paraconta){
        if (deconta === 'CC'){
            this.saldoCC -= valor;
            this.saldoCP += valor;
            console.log(`A transferencia de R$${valor} da conta correnta para conta poupança foi concluida, valores atualizados R$${this.saldoCC} conta corrente / R$${this.saldoCP} Conta poupança`);
        }

        else if (deconta == 'CP'){
            this.saldoCP -= valor;
            this.saldoCC += valor;
            console.log(`A transferencia de R$${valor} da conta poupança para conta corrente foi concluida, valores atualizados R$${this.saldoCC} conta corrente / R$${this.saldoCP} Conta poupança`);
        }
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(saldoCC, saldoCP, jurosP) {
        super(saldoCC, saldoCP, jurosP * 2);
    }
}

let Banco = new ContaBancaria (1200, 400, 2);

Banco.deposito(500, 'CC');

Banco.deposito(600, 'CP');

Banco.jurosContaP(12);

Banco.consulta('CP');

Banco.transferencia(1240, 'CP', 'CC');



