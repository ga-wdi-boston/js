//We'll learn how the following line of code works later in the course
var ask = typeof(prompt) === 'undefined' ? require('./ask.js') : prompt;

var name = ask('What\'s your name? ');

console.log("Hi, " + name);
