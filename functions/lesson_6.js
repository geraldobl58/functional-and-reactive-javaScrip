// map
const numbers = [1, 2, 3, 4, 5];
const doubleNumber = n => n * 2;
console.log(numbers.map(doubleNumber));

// using map
const names = ['john', 'jane', 'miller', 'jack'];
const firstWord = text => text[0];
const word = names.map(firstWord);
console.log(names);
console.log(word);

const cart = [
  { name: 'pen', qtd: 10, price: 7.99 },
  { name: 'printer', qtd: 0, price: 600.20 },
  { name: 'book', qtd: 4, price: 5.88 },
  { name: 'pencil', qtd: 3, price: 2.99 },
  { name: 'scissors', qtd: 1, price: 4.89 },
];

const getNames = item => item.name;
console.log(cart.map(getNames));

const getTotal = item => item.qtd * item.price;
const totals = cart.map(getTotal);
console.log(totals);


// create array map pure
Array.prototype.myMap = function(fn) {
  const mapped = [];

  for(let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }

  return mapped;
}

const getNamesMap = item => item.name;
console.log(cart.myMap(getNamesMap));

const getTotalMap = item => item.qtd * item.price;
const totalsMap = cart.myMap(getTotalMap);
console.log(totalsMap);