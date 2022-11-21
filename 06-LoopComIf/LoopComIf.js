const prompt = require("prompt-sync")();

//Criar um loop com ifs

var contador = 0
var numero = prompt("Digite um número:");
// é menor         < 3
// é igual a 3    == 3
fazerloop();
function fazerloop() {
    if (contador < numero){
        contador++;
        console.log(contador);
        fazerloop();
    }
}