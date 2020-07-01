// oo
function Product(name, price, discount = 0.15) {
  this.name = name;
  this.price = price;
  this.discount = discount;

  this.finalPrice = function() {
    return this.price * (1 - this.discount);
  }
}

const productOne = new Product('pen', 8.59);
console.log(productOne.name);

const productTwo = new Product('fridge', 2345.59);
console.log(productTwo.price);
console.log(productTwo.finalPrice());