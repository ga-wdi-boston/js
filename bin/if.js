'use strict'

// We'll learn about require later in the course
const ask = require('../lib/ask.js')

const name = ask('What\'s your name? ')
if (name === 'Brian') {
  console.log('Hi, Brian!')
} else if (name === 'Jeff') {
  console.log('Hi, Jeff!')
} else {
  console.log('Hi, stranger.')
}
