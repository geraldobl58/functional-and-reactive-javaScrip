const fs = require('fs');
const path = require('path');

function readDirectory(way) {
  return new Promise((resolve, reject) => {
    try {
      let files = fs.readdirSync(way);
      files = files.map(file => path.join(way, file));
      resolve(files);
    } catch(err) {
      reject(err);
    }
  });
}

function readFile(way) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(way, { encoding: 'utf-8' });
      resolve(content.toString())
    } catch(err) {
      reject(err);
    }

  });
}

function readFiles(ways) {
  return Promise.all(ways.map(way => readFile(way)));
}

function elementsFinished(standard) {
  return function(array) {
    return array.filter(element => element.endsWith(standard));
  }
}

function removeEmpty(array) {
  return array.filter(element => element.trim());
}

function containsText(standard) {
  return function(array) {
    return array.filter(element => !element.includes(standard));
  }
}

function removeIsNumber(array) {
  return array.filter(element => {
    const number = parseInt(element.trim());
    return number !== number;
  });
}

function removeSymbols(symbols) {
  return function(array) {
    return array.map(element => {
      let newText = element;
      symbols.forEach(symbol => {
        newText = newText.split(symbol).join('');
      });
      return newText;
    })
  }
}

function joinContent(array) {
  array => array.join(' ');
} 

function separateTextSymbol(symbol) {
  return function(text) {
    return text.split(symbol);
  }
}

 
module.exports = {
  readDirectory,
  readFile,
  readFiles,
  elementsFinished,
  removeEmpty,
  containsText,
  removeIsNumber,
  removeSymbols,
  joinContent,
  separateTextSymbol
}