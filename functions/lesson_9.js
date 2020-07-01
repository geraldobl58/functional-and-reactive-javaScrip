// promise
let a = 1;
console.log(a);

const firstElement = (array) => array[0];
const firstWord = (string) => string[0];
const lowerCase = (word) => word.toLowerCase();

new Promise(function(resolve) {
  resolve(['John', 'Travis', 'Jane', 'Mark', 'Miller']);
}).then(firstElement)
  .then(firstWord)
  .then(lowerCase)
  .then(console.log);
