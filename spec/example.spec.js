'use strict';

const chai = require('chai');

const expect = chai.expect;

const example = require('../lib/example');

describe('Example', () =>
  it('is true', () =>
    expect(example()).to.be.true
  )
);
