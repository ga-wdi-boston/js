'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let name = ask('What\'s your name? ');
if (name === 'Lauren') {
  console.log('Hi, Lauren!');
} else if (name === 'Antony') {
  console.log('Hi, Antony!');
} else {
  console.log('Hi, stranger.');
}