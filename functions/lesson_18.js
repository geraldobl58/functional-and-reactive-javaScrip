//oo
//oo
class Product {
  
  constructor(name, price, discount = 0.50) {
    this.name = name;
    this.price = price;
    this._discount = discount;

    this.finalPrice = function() {
      return this.price * (1 - this.discount);
    }

  }

}

Product.prototype.log = function() {
  console.log(`Name: ${this.name} - Price: ${this.price}`);
}

Object.defineProperty(Product.prototype, 'discount', {
  get: function() {
    return this._discount;
  }
});

Object.defineProperty(Product.prototype, 'discountString', {
  get: function() {
    return `${this._discount * 100}% discount`;
  },
  set: function(newDiscount) {
    if (newDiscount >= 0 && newDiscount <= 1) {
      this._discount = newDiscount;
    }
  }
});

const productOne = new Product('pen', 10);
console.log(productOne.name);
productOne.log();

const productTwo = new Product('fridge', 3000);
console.log(productTwo.price);
console.log(productTwo.finalPrice());
productTwo.discount = 0.99;
console.log(productTwo.discount)
console.log(productTwo.discountString);