class Carro {
    constructor(marca, cor, gasolina_restante){
        this.marca = marca;
        this.cor = cor;
        this.gasolina_restante = gasolina_restante;
    }   

    dirigir(distancia){
        const consumoPorKm = 0.1;
        const consumoTotal = consumoPorKm * distancia;
        if (consumoTotal <= this.gasolina_restante){
            this.gasolina_restante -= consumoTotal;
            console.log(`Após ter percorrido ${distancia} KM, o combustível restante é de ${this.gasolina_restante} Litros`); 
        } 
        else {
            console.log("O veículo está sem combustível!");
        }
    }

    abastecer(litros) {
        this.gasolina_restante += litros;
        console.log(`Abastecimento concluído. Gasolina restante: ${this.gasolina_restante} litros.`);

    }

}


const meuCarro = new Carro("Volks", "Prata", 50);

meuCarro.dirigir(19);
meuCarro.dirigir(100);
meuCarro.dirigir(1000);
meuCarro.abastecer(20);