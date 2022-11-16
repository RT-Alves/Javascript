const prompt = require('prompt-sync')();
// identar o código ALT+SHIFT+F

//EXERCÍCIO

/*
Crie um código onde o usuário vai digitar números.
O código começa já solicitando para o usuário digitar um valor.
ex.: 'Digite um valor'

Ao digitar um número, o codigo deve SALVAR o numero digitado e repetir a pergunta,
e o usuário pode ir digitando quantos números ele quiser e o sistema precisa ir salvando eles,
até que o usuário digite "sair" e logo após o sistema sair, ele mostra uma soma de todos
os numeros que o usuário digitou junto de todos eles.

ex.:
Digite um numero: 5
Digite um numero: 2
Digite um numero: 3
Digite um numero: sair

Seus numeros foram: [5,2,3]
Seu total foi: 10

Vai precisar de loops e arrays
Loops para repetição e array para armazenar os valores
*/

//SOMAR VALORES INSERIDOS NO ARRAY
var arrValor = [];
var digitaVal
var resultado = 0;

digitaValores();
//INSERI OS VALORES DIGITADOS DENTRO DO ARRAY "VALORES"
//VERIFICA SE UM VALOR FOI DIGITADO OU NÃO
//PERMITE AO USUARIO SAIR MOSTRANDO O RESULTADO DA SOMA DOS NÚMEROS INSERIDOS
function digitaValores() {
    digitaVal = prompt("Digite um valor:");
    if (apenasNumero(digitaVal)) {
        arrValor.push(digitaVal);
        digitaValores();
    } else if (digitaVal == "sair") {
        verificaSair();        
    } else {
        console.log("Digite um número ou sair")
        digitaValores();
    }
}

//VERIFICA SE OS VALORES DIGITADOS SÃO SOMENTE NÚMEROS
function apenasNumero(dados) {
    return /^\d+$/.test(dados);
}

//SOMA VALORES DENTRO DO ARRAY
function somarValores() {
    for (var i = arrValor.length - 1; i >= 0; i--) {
        resultado += parseInt(arrValor[i]);
    }
    //return resultado
}

//AO SAIR, EXECUTA A SOMA E MOSTRA O RESULTADO
function verificaSair() {
        console.log(arrValor);
        somarValores();
        console.log("A soma dos números digitados é:", resultado);
        resultado = 0;
}