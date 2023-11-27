function Cachorro(raca,pata,cor){
    this.pata = pata;
    this.cor = cor;
    this.raca = raca;
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuuu")
}

Cachorro.prototype.latir = function(){
    console.log("Au Au")
}

let husky = new Cachorro('Husky', 4,'cinza');

husky.uivar();
husky.latir();