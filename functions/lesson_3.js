// Arrow Function

const arrow1 = () => console.log('Arrow 1');
arrow1();

const arrow2 = name => "Arrow 1 " + name + '!';
console.log(arrow2('John Doe'));

const arrow3 = name => `Arrow 3 ${name}!`;
console.log(arrow3('Jane Doe'));

const sum = (...number) => {
  console.log(Array.isArray(number));
  let result = 0;
  for(let n of number) {
    result += n;
  }
  return result;
}
console.log(sum(2, 3));
console.log(sum(4, 5));

const power = base => exp => Math.pow(base, exp);
console.log(power(2)(10));

// this
Array.prototype.last = function() {
  console.log(this[this.length - 1]);
}

Array.prototype.first = function() {
  console.log(this[0]);
}

const numbers = [-33, 1, 2, 3];
numbers.last();
numbers.first();

const division = (a, b) => a / b;
console.log(division(10, 2));
