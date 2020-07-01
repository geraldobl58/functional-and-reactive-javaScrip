const cart = [
  { name: 'pen', qtd: 10, price: 7.99, fragile: true },
  { name: 'printer', qtd: 1, price: 649.50, fragile: true },
  { name: 'book', qtd: 4, price: 27.10, fragile: false },
  { name: 'pencil', qtd: 3, price: 5.82, fragile: false },
  { name: 'scissors', qtd: 1, price: 19.20, fragile: true },
];

// filter, map, reducer

// 1 - Fragile === true
// 2 - Qtd: 4, Price: 27.10 => total
// 3 - Average totals

const average = cart
  .filter(item => item.fragile)
  .map(item => item.qtd * item.price)
  .reduce((accumulator, element) => {
    const newQtd = accumulator.qtd + 1;
    const newTotal = accumulator.totals + element;
    return {
      qtd: newQtd, 
      totals: newTotal, 
      average: newTotal / newQtd
    }
  }, { qtd: 0, totals: 0, average: 0}).average;

console.log(average);