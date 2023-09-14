// Verifique se o número é primo!
// Um número primo, é um número natural, maior que 1 e apenas divisível por 
// si proprio e por 1;

let num = 41;
let divisoes = 0;

for(let i = 1; i <= num; i++) {
    //4 - 1, 2, 4
    if(num % i == 0) {
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log(`O número ${num} é primo`);

} else{
    console.log(`O número ${num} não é primo`);

}