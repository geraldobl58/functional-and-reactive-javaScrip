//oo
class Product {
  
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

  get name() {
    return `Product: ${this._name}`;
  }

  set name(newName) {
    this._name = newName.toUpperCase();
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (newPrice >= 0) {
      this._price = newPrice;
    }
  }

  get finalPrice() {
    return this.price * (1 - this.discount);
  }

}

const productOne = new Product('pen', 10);
productOne.price = -20;
console.log(productOne.name);
console.log(productOne.price);

const productTwo = new Product('fridge', 10000, 0.8);
console.log(productTwo.price);
console.log(productTwo.finalPrice);