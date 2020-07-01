// promise
function generateNumber(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise(resolve => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor) + min;
    resolve(random);
  });
}
generateNumber(1, 60)
  .then(number => number * 10)
  .then(numberTen => `the number generated was ${numberTen}`)
  .then(console.log);