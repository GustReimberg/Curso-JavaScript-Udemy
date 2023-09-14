// Faça uma estruutra if/else para veriifcar se um usuário pode dirigir;
// Armazene em variáveis algumas informações sobre o usuário: idade,
// se tem CNH
// Se a idade for maior que 18 e não possuir CNH, exima uma mensagem;
// Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
// Se não tiver 18 e nem CNH, exima outra mensagem;

let idade = 18;
const cnh = "sim";

if(idade >= 18 && cnh == "sim"){
    console.log("Apto para dirigir!");
} else if(idade >= 18 && cnh == "não"){
    console.log("Você não possui CNH");
} else{
    console.log("Você não possui CNH e nem idade para dirigir");
}