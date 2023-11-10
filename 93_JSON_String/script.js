let pessoa = {
    "nome": "Gustavo",
    "idade": 21,
    "profissao": "Programador",
    "hobbies": ["Video game", "Leitura", "Futebol"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);


let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);