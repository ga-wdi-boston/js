#!/usr/bin/env node
'use strict'
const readline = require('readline')
const fs = require('fs')
const path = require('path')

const outfile = process.stdout

const rl = readline.createInterface({
  input: fs.createReadStream(process.argv[2])
})

let inCodeBlock = false

rl.on('line', (line) => {
  if (inCodeBlock) {
    inCodeBlock = !/<!-- end code block -->/.test(line)
    if (!inCodeBlock) outfile.write('```\n' + `${line}\n`)
  } else {
    outfile.write(`${line}\n`)
    inCodeBlock = /<!-- start code block .+ -->/.test(line)
    if (inCodeBlock) {
      const filename = line.match(/ +file="(.+)" +/)[1]
      const extension = path.extname(filename).slice(1)
      outfile.write('```' + `${extension}\n`)
      outfile.write(fs.readFileSync(filename))
    }
  }
})
