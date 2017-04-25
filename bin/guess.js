#!/usr/bin/env node
'use strict'

// We'll learn more about require and readline later
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Guess my name? '
})

// write the prompt specified to `createInterface`
rl.prompt()

let count = 0
let correct = false

// check each line entered for a correct guess
rl.on('line', function (answer) {
  count = count + 1

  if (answer === 'Brian') {
    correct = true
    rl.close()
  } else {
    console.log(`Sorry, your guess '${answer}', isn't correct.`)
    rl.prompt()
  }
})
.on('close', function () {
  if (correct) console.log(`You got it in ${count} tries!`)
  else console.log('Bye!')
})
