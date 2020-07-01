// reduce
const cart = [
  { name: 'pen', qtd: 10, price: 7.99 },
  { name: 'printer', qtd: 0, price: 600.20 },
  { name: 'book', qtd: 4, price: 5.88 },
  { name: 'pencil', qtd: 3, price: 2.99 },
  { name: 'scissors', qtd: 1, price: 4.89 },
];

const getTotals = item => item.qtd * item.price;
const sumTotal = (acumulator, element) => acumulator + element;
const grandTotal = cart
  .map(getTotals)
  .reduce(sumTotal);
console.log(grandTotal);

// create reduce pure
Array.prototype.myReduce = function(fn, initial) {
  let accumulator = initial;

  for(let i = 0; i < this.length; i++) {
    if (!accumulator && i === 0) {
      accumulator = this[i];
    } else {
      fn(accumulator, this[i], i, this);
    }
  }
  return accumulator;
}

const totalMyReduce = cart
  .map(getTotals)
  .myReduce(sumTotal);
console.log(totalMyReduce);