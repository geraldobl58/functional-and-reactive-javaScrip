// pure function
function generateNumberRandom(min, max) {
  const factor = max - min + 1;
  return parseInt(Math.random() * factor);
}
console.log(generateNumberRandom(1, 10000));
console.log(generateNumberRandom(1, 10000));
console.log(generateNumberRandom(1, 10000));
console.log(generateNumberRandom(1, 10000));
console.log(generateNumberRandom(1, 10000));
