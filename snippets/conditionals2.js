'use strict'

let count = process.argv[2]

while (count < 5) {
  console.log('Inside of the loop, count is ' + count)
  count++
}

console.log('Outside of the loop, count is ' + count)
