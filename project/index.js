const path = require('path');
const fn = require('./function');

const way = path.join(__dirname, '..', 'data', 'legends');

const symbols = [
  '.',
  '?',
  '-',
  ',',
  '"',
  '♪',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')'
];

fn.readDirectory(way)
  .then(fn.elementsFinished('.srt'))
  .then(fn.readFiles)
  .then(fn.joinContent)
  .then(fn.separateTextSymbol('\n'))
  .then(fn.removeEmpty)
  .then(fn.containsText('-->'))
  .then(fn.removeIsNumber)
  .then(fn.removeSymbols(symbols))
  .then(fn.joinContent)
  .then(fn.separateTextSymbol(' '))
  .then(separateSymbols)
  .then(fn.removeEmpty)
  .then(console.log);