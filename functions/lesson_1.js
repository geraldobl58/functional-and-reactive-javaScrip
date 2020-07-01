let a = 2;
console.log(a);

// function declaration
function goodMorning() {
  console.log('good morning');
}

goodMorning();

// function expression
const goodAfternoon = function () {
  console.log('good afternoon');
}

goodAfternoon();


function sum(a, b) {
  return a + b;
}

const result = sum(2, 3);
console.log(result);