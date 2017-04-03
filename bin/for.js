#!/usr/bin/env node
'use strict'

// We'll learn about process.argv later in the course
const stop = +process.argv[2] || 10

let test = 0

while (test < stop) {
  console.log(test)
  test++
}

for (let i = 0; i < stop; i++) {
  console.log(test)
}
