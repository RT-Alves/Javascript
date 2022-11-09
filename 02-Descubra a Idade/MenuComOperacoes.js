const prompt = require('prompt-sync')();
// identar o código ALT+SHIFT+F

//===========================================================================
// VAR MENU
var menu = Number;

// VAR IMC 
var peso = Number;
var imc = Number;
var altura = Number;

// VAR REAL PARA DÓLAR
var cotacaoDolar = Number;
var valorEmReais = Number;
var convertido = Number;

// VAR CALCULAR ÁREA DO CÍRCULO
var raio = Number;
var area = Number;
var pi = 3.14159;

//===========================================================================
//===========================================================================
// MENU
abrirMenu();
function abrirMenu() {
    console.log("Escolha uma opção 1-IMC / 2-Cotação / 3-Área do Círculo");
    menu = prompt("Informe o código:");
    switch (menu) {
        case "1":
            abrirImc();
            break;
        case "2":
            abrirConversao();
            break;
        case "3":
            abrirArea();
            break;
        default:
            abrirMenu();
    }
}

// VOLTAR PARA O MENU PRINCIPAL
function voltarMenu (){
    menu = prompt("Voltar para o Menu? 1-SIM / 2-NÃO: ");
    if (menu == 1) {
        abrirMenu();
    } else {
        console.log("Fim!");
    }
}

//===========================================================================
// CALCULAR IMC
function abrirImc() {
    altura = (prompt("Digite sua altura:") / 100);
    peso = prompt("Dgite seu peso:");
    imc = (peso / altura ** 2);
    console.log(imc);

    if (imc < 18.5) {
        console.log("Indica magreza, obesidade 0");
    } else if (imc < 24.9) {
        console.log("Indica normalidade, obesidade 0");
    } else if (imc < 29.9) {
        console.log("Indica sobrepeso I");
    } else if (imc < 39.9) {
        console.log("Indica obesidade II");
    } else if (imc > 39.9) {
        console.log("Indica obesidade III");
    }

    voltarMenu();
}

//===========================================================================
// CONVERTER REAL PARA DÓLAR
function abrirConversao() {
    cotacaoDolar = prompt("A cotação do Dólar hoje é:");
    valorEmReais = prompt("Valor em Real:");

    convertido = valorEmReais * cotacaoDolar;
    console.log("R$", valorEmReais, `igual a U$ ${convertido.toFixed(2)}`);

    voltarMenu();
}

//===========================================================================
// CALCULAR ÁREA DO CÍRCULO
//A = π·r²
function abrirArea() {
    raio = prompt("Digite o valor do raio:");
    area = pi * raio ** 2;
    console.log(`Área = ${area.toFixed(4)}`);

    voltarMenu();
}