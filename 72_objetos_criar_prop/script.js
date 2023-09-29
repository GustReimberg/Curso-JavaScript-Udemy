let pessoa = {
    nome: "Matheus",
    idade: 29,
    profissao: "Programador",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);

pessoa.pcd = false;

console.log(pessoa.pcd);

console.log(pessoa);