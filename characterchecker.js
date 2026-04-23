const readlineSync = require('readline-sync');

let word = readlineSync.question('enter a word: ');

let count = readlineSync.questionInt('enter index number: ');

let character = word.charAt(count);

console.log(`the character at index ${count} is ${character}`);

let phrase = readlineSync.question('enter a phrase: ');
console.log(phrase[0]);
console.log(phrase[1]);
console.log(phrase[2]);
console.log(phrase[3]);
console.log(phrase[4]); 
console.log(phrase[5]);
