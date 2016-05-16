'use strict';

// http://ericnish.io/blog/how-to-neatly-separate-grunt-files
// http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
// discuss how to break up gruntfiles

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt);

};
