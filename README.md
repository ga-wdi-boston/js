![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Fundamentals

## Introduction

A review of the basics of JavaScript.

## Objectives

By the end of this lesson, students should be able to:

- Explain variables, literals, and their differences.
- Explain the results of simple expressions.
- Evaluate simple JavaScript by inspection.

## Fundamentals

### To start

In your browser open `https://github.com/ga-wdi-boston/js-fundamentals-08` and fork the repository.  We'll find the link in slack.

Then in a terminal window at the shell prompt:

```bash
~$ cd wdi
~/wdi$ git clone git@github.com:ga-wdi-boston/js-fundamentals-08.git
~/wdi$ cd js-fundamentals-08
~/wdi/js-fundamentals-08$ subl .
~/wdi/js-fundamentals-08$ npm install
```

These will be standard beginning steps we'll take for repository links sent in slack.  In future lesson plans these instructions will be condensed to `Fork, clone, and npm install.`

### Variables and literals

What are the differences between these two ideas?

We'll explore them using a REPL.

#### REPL

- <b>R</b>ead
- <b>E</b>valuate
- <b>P</b>rint
- <b>L</b>oop

```bash
~/wdi/js-fundamentals-08$ node
>
```

What other tools could we use as a JavaScript REPL?

Are there benefits to using one or the other?

### JavaScript primitives

- Boolean
- Number
- String
- null
- undefined

### JavaScript operators and precedence

We'll look at a subset of the available operators.

Type | Operators
---- | ---------
member access | `. []`
negation, increment, and type | `! - + ++ -- typeof`
multiplication and division | `* / %`
addition and subtraction | `+ -`
equality | `=== !===`
logical and | `&&`
logical or | <code>&#124;&#124;</code>
conditional | `?:`
assignment | <code>= += -= &#42;= /= %= &#124;=</code>
comma | `,`

Operators come in three classes, unary, binary (the most common), and ternary (there is only one).

### Expressions

An expression is a combination of literals, variables, operators, and functions that are interpreted and produce a value.

The simplest expression is a variable or literal followed by a semicolon.

```js
> age;
```

Variables need to be declared.

More complicated expressions are formed by combining simpler expressions using operators.

An expression with all of the variables replaced with literals that are equal to the variables values will produce the same result.

#### Assignment

```js
> var age;
> age = 45;
> var name;
> name = "Antony";
> age + 2;
```

#### Number

Compare:  `=`, `+=`, `++`

Remainder: `%`

#### String

```js
> var firstName = "Antony";
> var lastName = "Donovan";
> console.log(firstName + " " + lastName);
```

##### JavaScript variables are untyped.

```js
> var age = 45;
> age = "Antony";
```
Although it doesn't cause an error, avoid confusing code like the above.

##### Converting numbers to strings and strings to numbers.

Numbers are converted to strings when added to strings.

```js
> 10 + "7";
> typeof(10 + "7");
```

Strings are converted to number when the unary `+` is applied.

```js
> 10 + +"7";
> typeof(10 + +"7");
```

What's different about `3 + 5 + "string";` and `"string" + 3 + 5`;?

#### Boolean

What do you think of when you here "truthy" and "falsy"?

```js
> var age = 17;
> age === 35;
> age > 21;
> age = 45;
> age > 21;
```

How would you check if a variable contained an odd number?

#### falsy list (everything else in JavaScript is truthy),

- `false`
- `undefined`
- `null`
- `0 // and -0`
- `NaN`
- `""  // and '' - the empty string`

Note:  The negation of a truthy value is `false` and the negation of a falsy value is `true`.

```js
var truthy = "A non-empty string";
var falsy = 0;
!truthy === false;
!falsy === true;
```

### Conditional and loops

The if statement:

```js
var name = ask("What's your name? ");
if (name === 'Antony') {
  console.log('Hi, Antony!');
} else if (name === 'Matt') {
  console.log('Hi, Matt!');
} else {
  console.log('Hi, stranger.');
}
```

The while loop:

```js
var count = 0;
var answer = '';

while (answer !== 'Antony') {
  answer = ask("Guess my name? ");
  count = count + 1;
}
console.log("You got it in " + count + " tries!");
```

The for loop:

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

which is equivalent to:

```js
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

Nesting conditionals in loops:

```js
for (var i = 0; i < 10; i++) {
  if (i===5) {
    console.log("five!");
  }
}
```

## Assessment

Please follow the instructions at https://github.com/ga-wdi-boston/js-fundamentals-08-solo-assessment


## Additional Resources

See the following sections at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

- Grammar and types
- Control flow and error handling
- Loops and iteration
- Expressions and operators
- Number and dates
- Text formatting

Note, sections marked with lab flasks are part of ECMAScript 6 (just adopted) or later and should be skipped for now.
