// filter
const cart = [
  { name: 'pen', qtd: 10, price: 7.99 },
  { name: 'printer', qtd: 0, price: 600.20 },
  { name: 'book', qtd: 4, price: 5.88 },
  { name: 'pencil', qtd: 3, price: 2.99 },
  { name: 'scissors', qtd: 1, price: 4.89 },
];

const greaterThanZero = item => item.qtd > 0;
const greaterThanaThousand = item => item.qtd >= 1000;


const products = cart.filter(greaterThanZero);
console.log(products);

const getNames = item => item.name;

const itemsValid = cart
  .filter(greaterThanZero)
  .map(getNames);
console.log(itemsValid);

const nameItemsValid = cart
  .filter(greaterThanaThousand)
  .map(getNames);
console.log(nameItemsValid);


// create filter pure
Array.prototype.myFilter = function(fn) {
  const newArray = [];

  for(let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push([i]);
    }
  }

  return newArray;
}

const itemsValidFilter = cart
  .filter(greaterThanZero)
  .map(getNames);
console.log(itemsValidFilter);

const nameItemsValidName = cart
  .myFilter(greaterThanaThousand)
  .map(getNames);
console.log(nameItemsValidName);