class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }    
    latir(){
        console.log("Latido");
    }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador','Caralamelo');

console.log(labrador.patas);
labrador.latir();
