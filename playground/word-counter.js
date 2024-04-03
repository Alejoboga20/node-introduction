const fs = require('fs');

const content = fs.readFileSync('react-readme.md', { encoding: 'utf-8' });
const amountOfWordsInTheEntireDocument = content.split(' ').length;
const amountOfCoincidence = content.match(/react/gi).length;

console.log({ amountOfWordsInTheEntireDocument });
console.log({ amountOfCoincidence });
