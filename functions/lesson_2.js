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


function execAny(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

execAny(3);
execAny(goodMorning);
execAny(goodAfternoon);

// function power(base, exp) {
//   return Math.pow(base, exp);
// }

function power(base) {
  return function(exp) {
    return Math.pow(base, exp);
  }
}

const bits = power(2);
console.log(bits(8));

const resultPower = power(2)(8);
console.log(resultPower);