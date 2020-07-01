const fs = require('fs');
const path = require('path');

function readFileDocument(way) {
  return new Promise(resolve => {
    fs.readFile(way, function(_, content) {
      resolve(content.toString());
    });
    console.log('after reading...');
  });
}

const way = path.join(__dirname, 'data.txt');
readFileDocument(way)
  .then(content => content.split('\n'))
  .then(lines => lines.join(', '))
  .then(content => `the final value is ${content}`)
  .then(console.log);