class Endereco {
    constructor(rua, bairro, cidade, estado){
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;

    }

    atualizarRua(novaRua) {
        this.rua = novaRua;

    }

    atualizarBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    atualizarCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    atualizarEstado(novoEstado) {
        this.estado = novoEstado;
    }

};

let enderecoCliente = new Endereco("Rua A", "Bairro X", "Cidade Y", "Estado Z");

enderecoCliente.atualizarRua("Nova Rua");
enderecoCliente.atualizarBairro("Novo Bairro");
enderecoCliente.atualizarCidade("Nova Cidade");
enderecoCliente.atualizarEstado("Novo Estado");

console.log(enderecoCliente);
