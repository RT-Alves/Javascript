//const prompt = require("prompt-sync")();

//EXERCISE LEVEL 1
let exerciseLevel1 = "EXERCISE LEVEL 1";
console.log(exerciseLevel1);

// 1- Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// 2- Print the string on the browser console using console.log()
console.log(challenge);

// 3- Print the length of the string on the browser console using console.log()
let string = 'JavaScript';
console.log('JavaScript has', string.length, 'letters'); // 10

// 4- Change all the string characters to capital letters using toUpperCase() method.
console.log(string.toUpperCase()); // JAVASCRIPT.

// 5- Change all the string characters to lowercase letters using toLowerCase() method.
console.log(string.toLowerCase()); // javascript.

// 6- Cut (slice) out the first word of the string using substr() or substring() method.
console.log(string.substring(4)); // Corta fora os primeiros 4 caracteres da palavra JavaScript.

// 7- Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(2, 21)); // Parte da frase foi separada.

// 8- Check if the string contains a word Script using includes() method.
console.log(string.includes('Script')); // Verificando se contém a palavra Script dentro da string da variável string (true or false).

// 9- Split the string into an array using split() method.
console.log(challenge.split('')); // Os caracteres da frase foram separadas em um array.

// 10- Split the string 30 Days Of JavaScript at the space using split() method.
console.log(challenge.split(' ')); // As palavras da frase foram separadas em um array.

// 11- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12- Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python')); // o método ".replace()", substitui uma palavra por outra.

// 13- What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)); // exibe qual caracter está alocado no index 15.

// 14- What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().
console.log(challenge.charCodeAt(11)); // mostra o número que representa o caracter na tabela ASCII. Nesse caso J = 74.

// 15- Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.
console.log(challenge.indexOf('a')); // mostra a posição da primeira ocorrência do caractere "a" na frase. 4

// 16- Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a')); // mostra a posição da última ocorrência do caractere "a" na frase. 14

// 17- Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18- Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
console.log(sentence.lastIndexOf('because'));

// 19- Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
console.log(sentence.search('because'));

// 20- Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let firstName = ' Rene ';
console.log(firstName.trim()); // remove espaços no começo e no final de uma string.

// 21- Use startsWith() method with the string 30 Days Of JavaScript and make the result true.
console.log(challenge.startsWith('30'));

// 22- Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));

// 23- Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/gi; // O "g" significa pesquisar em todo o texto e o "i" não diferencia maiúsculas de minúsculas.
console.log(sentence.match(pattern));

// 24- Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(string.concat("Rene", "Alves"));

// 25- Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2)); // repete seguidamente a string


//EXERCISE LEVEL 2
let exerciseLevel2 = "EXERCISE LEVEL 2";
console.log(exerciseLevel2);

// 1- Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quoteJohn = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quoteJohn);

// 2- Using console.log() print out the following quote by Mother Teresa:
let quoteMotherT = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quoteMotherT);



// 3- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
var stringNumero = '10';
var numeroInteiro = 10;
if (typeof stringNumero == typeof numeroInteiro) {
    console.log('São iguais');    
} else {
    stringNumero = parseInt(stringNumero);
    console.log(typeof stringNumero == typeof numeroInteiro);
}



// 4- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = 10;
let numDecimal = parseFloat('9.8');
console.log(numDecimal);

if (numDecimal == num) {
    console.log('É 10', numDecimal);
} else {
    console.log('Arredondou para', ((Math.round(numDecimal))));
}


// É on na palavra burro!!! CORRIGIR
// 5- Check if 'on' is found in both python and jargon
let pythonOn = true
let jargonOff = false
console.log(pythonOn == jargonOff) // false


// 6- I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentenceJargon = 'I hope this course is not full of jargon. Check if jargon is in the sentence.';
console.log(sentenceJargon.includes('jargon'));


// 7- Generate a random number between 0 and 100 inclusively.
const numRandom = Math.floor(Math.random() * (100 + 1));
console.log(numRandom);

// 8- Generate a random number between 50 and 100 inclusively.
const numRandom2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(numRandom2);

// 9- Generate a random number between 0 and 255 inclusively.
const numRandom3 = Math.floor(Math.random() * (254 + 1));
console.log(numRandom3);

// 10- Access the 'JavaScript' string characters using a random number.
let string3 = 'JavaScript';
const num3 = Math.floor(Math.random() * string3.length); // acessa os caracteres dentro de uma string usando números aleatórios dentro do comprimento do índice.
console.log(num3);

// 11- Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

// 12- Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substring(31, 54)); // Parte da frase foi separada.



//EXERCISE LEVEL 3
let exerciseLevel3 = "EXERCISE LEVEL 3";
console.log(exerciseLevel3);

// 1- Count the number of word love in this sentence.
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let sentenceLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let countLove = /love/gi; // O "g" significa pesquisar em todo o texto e o "i" não diferencia maiúsculas de minúsculas.
console.log(sentenceLove.match(countLove).length);


// 2- Use match() to count the number of all because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
let sentenceBecause = 'You cannot end a sentence with because because because is a conjunction';
let countBecause = /because/gi;
console.log(sentenceBecause.match(countBecause));

// ????
// 3- Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let txt = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let regEx = /\W/gi;
console.log(txt.replace(regEx, ''));


// O "g" significa pesquisar em todo o texto.
// O "i" não diferencia maiúsculas de minúsculas.
// d with escape character means d not a normal d instead acts a digit (d = digito)
// + means one or more digit numbers,if there is g after that it means global,
// search everywhere.


// 4- Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let textNumbers = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regEx2 = (/\d+/);
//console.log(textNumbers.match(/\d+/g)); // ["5000", "10000", "15000"]
let arrValores = textNumbers.match(/\d+/g);
let arrNumbers = arrValores.map(Number);
console.log('aqui', arrNumbers);

var sum = arrNumbers.reduce((accumulator,value) => accumulator + value,0);
console.log(sum);