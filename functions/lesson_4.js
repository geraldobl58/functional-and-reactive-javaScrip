// callbacks
function exec(fn, a, b) {
  return fn(a, b);
}

const sum = (x, y) => console.log(x + y);

exec(sum, 2, 5)

const result = exec(sum, 2, 3);
console.log(result);


const cb = () => console.log('Callback Fast...');
setInterval(cb, 1000);

setInterval(function() {
  console.log('Callback Slow...');
}, 2000);