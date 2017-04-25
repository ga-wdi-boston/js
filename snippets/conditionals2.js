'use strict'

let count = process.argv[2]

while (count < 5) {
  console.log('Im inside of the loop, count is ' + count)
  count++
}

console.log('Im outside of the loop, count is ' + count)
