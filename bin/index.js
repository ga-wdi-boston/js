#!/usr/bin/env node
'use strict'

const example = require('../lib/example')

const success = (data) => console.log('data', data)
const failure = (error) => console.error('error', error)

success(example.sync(false))

example.async(false, (error, data) => {
  if (error) {
    failure(error)
  } else {
    success(data)
  }
})

example.promise(false)
  .then(success)
  .catch(failure)
