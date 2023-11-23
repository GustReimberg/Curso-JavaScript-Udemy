const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log('Auuuuuuu');
    },
    rosnar: function() {
        console.log('Grrrrr');
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é" , this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor alemão');

console.log(cachorro.raca);


console.log(cachorro.getRaca());