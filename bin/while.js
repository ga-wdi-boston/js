'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let count = 0;
let answer = '';

while (answer !== 'Lauren') {
  answer = ask('Guess my name? ');
  count = count + 1;
}
console.log('You got it in ' + count + ' tries!');