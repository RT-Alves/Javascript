const prompt = require('prompt-sync')();
// identar o código ALT+SHIFT+F

//EXERCÍCIO

/*Fazer um sistema que consegue contar numeros, dado que o usuário
digite um numero qualquer o sistema deve mostrar todos os numeros 
entre 0 e o numero escolhido (caso não seja numero deverá mostrar um erro e pedir para que ele digite novamente)

Ex.: o Usuário digitou 7 
O sistema vai imprimir: "Contando 1, 2, 3, 4, 5, 6, 7"

Após terminar de contar o sistema deve perguntar se ele quer sair ou digitar um novo número.
Pesquisar por 'loops' em Javascript
*/

//CONTADOR NUMÉRICO
digitarNumero();

function apenasNumero(dados) {
    return /^\d+$/.test(dados);
}

function digitarNumero() {
    var numContador = 0;
    var numUsuario = prompt("Digite um número:");
    if (apenasNumero(numUsuario)) {
        while (numContador < numUsuario) {
            numContador++;
            console.log(numContador);
            if (numContador == numUsuario) {
                voltarMenu();
            }
        }
    } else {
        console.log("Você não digitou um número!");
        digitarNumero();
    }
}

function voltarMenu() {
    if (prompt("Quer digitar um novo número? 1-SIM / 2-NÃO: ") == 1) {
        digitarNumero();
    } else {
        console.log("Fim!");
    }
}