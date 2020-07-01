function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

const resultSum = sum(2)(2);
console.log(resultSum(2));
console.log(sum(2)(2)(2));

function calculator(x) {
  return function(y) {
    return function(fn) {
      return fn(x, y);
    }
  }
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

const resultCalculatorSubtract = calculator(10)(5)(subtract);
const resultCalculatorMultiply = calculator(10)(5)(multiply);
console.log(resultCalculatorSubtract);
console.log(resultCalculatorMultiply);