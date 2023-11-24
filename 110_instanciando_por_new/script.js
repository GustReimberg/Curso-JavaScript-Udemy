function Cachorro(raca,pata,cor){
    this.pata = pata;
    this.cor = cor;
    this.raca = raca;
    this.uivar = function(){
        console.log("Auuuuu");
    }
}

let husky = new Cachorro('Husky',4,'cinza');

console.log(husky);

let labrador = new Cachorro('Labrador',4,'Caramelo');

console.log(labrador);

husky.uivar();
labrador.uivar();