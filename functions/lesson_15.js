// async/await
function generateNumber(min, max, prohibitedNumbers) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor) + min;
    if (prohibitedNumbers.includes(random)) {
      reject('repeated number');
    } else {
      resolve(random);
    }
  });
}

async function numbersRandom(qtdNumbers, tryNumbers = 1) {
  try {
    const numbers = [];
    for (let _ of Array(qtdNumbers).fill()) {
      numbers.push(await generateNumber(1, 60, numbers));
    }
    return numbers;
  } catch(err) {
    if (tryNumbers > 10) {
      throw 'it was not possible'
    } else {
      return numbersRandom(qtdNumbers, tryNumbers + 1);
    }
  }
}
numbersRandom(6)
  .then(console.log)
  .catch(console.log);