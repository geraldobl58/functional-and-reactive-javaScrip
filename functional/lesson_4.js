// hoc - Higher Order Function

function execute(fn, ...params) {
  return function(first) {
    return `${first} ${fn(...params)}`;
  }
}

function sum(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

const a = execute(sum, 4, 5, 6)('result sum');
const b = execute(multiply, 30, 40)('result multiply');

console.log(a);
console.log(b);