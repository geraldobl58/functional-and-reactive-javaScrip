// callbacks
const fs = require('fs');
const path = require('path');

const way = path.join(__dirname, 'data.txt');

function showContent(_, content) {
  console.log(content.toString());
}

console.log('starting');
fs.readFile(way, showContent);
fs.readFile(way, (_, showContent) => console.log(showContent.toString()));
console.log('finishing');

console.log('starting sync');
const showContentSync = fs.readFileSync(way);
console.log(showContentSync.toString());
console.log('finishing sync');