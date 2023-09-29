let carro = {
    porta: 2,
    potamalas: '200L',
    motor: '2.0'
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true

}

console.log (carro);

Object.assign(carro, adicionais);

console.log(carro);