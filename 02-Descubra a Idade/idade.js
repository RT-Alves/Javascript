const prompt = require('prompt-sync')();
var idade = Number;
var anoNascimento = Number;

var anoAtual = prompt("Digite o ano atual:");

if (anoAtual != 2022) {
    console.log("Não é o ano atual!");
} else {
    anoNascimento = prompt("Digite seu ano de nascimento:");
    if (anoNascimento <= 1899) {
        idade = (anoAtual - anoNascimento);
        console.log("Sua idade é:", idade, "O ano está correto?");
    } else {
        if (anoNascimento >= 2022) {
            console.log("Ano Incorreto!");
        } else {
            idade = (anoAtual - anoNascimento);
            console.log("Sua idade é:", idade);
        }
    }
}    