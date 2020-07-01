// promise
function functionSimpleNot(value, error) {
  return new Promise((resolve, reject) => {
   try {
    if (Math.random() < error) {
      reject('Whoops error!');
    } else {
      resolve(value);
    }
   } catch(e) {
     reject(e);
   }
  });
}
functionSimpleNot('Testing...', 0.9)
  .then(console.log)
  .catch(err => console.log(`Error: ${err}`)); 