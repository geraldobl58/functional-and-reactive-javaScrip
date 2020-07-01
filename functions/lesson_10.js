// promise
setTimeout(function() {
  console.log('Running function');

  setTimeout(function() {
    console.log('Running function function');

    setTimeout(function() {
      console.log('Running function function function');
    }, 3000);
  }, 2000);
}, 1000);

function waitFor(time = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Running promise!');
      resolve();
    }, time);
  }, time);
}
waitFor()
  .then(() => waitFor())
  .then(waitFor);