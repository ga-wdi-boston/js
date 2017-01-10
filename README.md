![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Basics

## Introduction

A review of many of the building blocks of JavaScript.

Although ECMAScript 6 ([ES6](http://www.ecma-international.org/ecma-262/6.0/))
is the latest standard, adopted in June of 2015, we'll mostly focus on features
from the [ES5](http://www.ecma-international.org/ecma-262/5.1/) standard.  Some
of the references in this document may include descriptions of ES6 features.
These features will usually be denoted with `(new in ECMAScript 6)` in the main
text or with a **flask icon** in the navigation sidebar.

`let` and `const` are the primary ES6 features introduced in this training.  In
order to to use these features, we'll need to be in strict mode.

## Objectives

By the end of this lesson, students should be able to:

-   List all 5 JavaScript primitives and give an example of each
-   Identify the operator in an expression and explain what it does
-   Define variable and contrast with value
-   Evaluate simple JavaScript by inspection
-   Write simple scripts that use flow control

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.

Then:

```sh
git branch training
git checkout training
atom .
```

Note: when creating and then immediately switching to a branch you can use
`git checkout -b <new branch name>`.

## Basics

### Primitive types

ES5 has 5 primitive [types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures): `Number`, `String`, `Boolean`, `null`, and `undefined`.

| Type      | Examples                        |
|:----------|:--------------------------------|
| Number    | `-0`, `NaN`, `Infinity`         |
| String    | `''`, `"The non-empty string."` |
| Boolean   | `true`, `false`                 |
| null      | `null`                          |
| undefined | `undefined`                     |

Primitive types represent **immutable** values.  We'll contrast this with
reference types in a later lesson.

The types Number and String both have large sets of possible values.  Boolean
has only two values and null and undefined each have just one.

The ES6 primitive type `Symbol` is intentionally omitted.

### Literals

Literals represent specific values in the source code.
Some examples are `1`, `'A string'`, `null`.

### Variables

#### Node.js

We'll use Node.js as a [REPL](https://nodejs.org/api/repl.html) and script
runner to evaluate expressions and explore JavaScript features.

-   **R**ead
-   **E**valuate
-   **P**rint
-   **L**oop

#### Code Along: Declare Variables

```bash
$ node
> 'use strict';
>
```

```js
> bornOn;
```

Variables need to be declared.

```js
> let bornOn;
```

Variables name storage for the value they contain.  Because JavaScript is a
dynamically typed language, you can assign a value of one type to a variable and
then later assign a value of a different type to that same variable.

In JavaScript, `null` represents the explicitly omitted value, whereas
`undefined` represents the default omitted value.  Variables that have been
declared but are uninitialized or unset have the value `undefined`.

### Operators

Operators come in three classes, unary, binary (the most common), and ternary
(there is only one).

Operator precedence determines the order in which operators are evaluated.
Operators with higher precedence are evaluated first.

Associativity determines the order in which operators of the same precedence are
processed.

The following table lists a subset of the JavaScript
[operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
from higher to lower precedence.

| Type                                                 | Associativity | Operators                      |
|:-----------------------------------------------------|:--------------|:-------------------------------|
| grouping                                             | n/a           | `()`                           |
| postfix increment                                    | n/a           | `++` `--`                      |
| negation, numeric conversion, prefix increment, type | right-to-left | `!` `-` `+` `++` `--` `typeof` |
| multiplication, division, modulo                     | left-to-right | `* / %`                        |
| addition, subtraction                                | left-to-right | `+ -`                          |
| relation, instance                                   | left-to-right | `<` `<=` `>` `>=` `instanceof` |
| strict equality                                      | left-to-right | `===` `!==`                    |
| logical and                                          | left-to-right | `&&`                           |
| logical or                                           | left-to-right | `||`                           |
| conditional                                          | right-to-left | `?:`                           |
| assignment                                           | right-to-left | `=` `+=` `-=` `*=` `/=` `%=`   |

### Expressions

An expression is a combination of literals, variables, operators, function
invocations and sub-expressions that are interpreted and produce a value.  Not
all such combinations produce _sensible_ results.

The simplest expression is a variable or literal followed by a semicolon. More
complicated expressions are formed by combining simpler expressions using
operators.

An expression with all of the variables replaced with literals that are equal to
the values of the variables will produce the same result.

#### Code Along: Assignment expressions

Assignment changes the value of a variable.

```js
let height;
height;
height = 72;
height;
let name;
name = 'Brian';
name;
```

Remember: JavaScript variables are untyped.

```js
name = 'Brian';
name = 29;
```

Although it doesn't cause an error, avoid confusing code like the above.

Now try it yourself!
Create a new variable named `developer`, and store the name of the person
sitting next to you in it. Now change it to someone else in the room!

##### Constants

Constants must be initialized, assigned a value, when created.  Uninitialized
constants are a syntax error in Firefox.  In Chrome or node they will always
have the value `undefined`.

```js
const pi = 3.14159265359; // rounded
pi;
const e;
e = 2.71828182846; // rounded
e;
```

#### Numeric expressions

Simple calculations:

```js
5 + 3;
7 - 2;
11 % 5;
```

Expressions with variables only change values with assignment.

```js
height = 80;
height - 1;
height;
```

What will `height` be at the end of the 3 lines above?

Now let's compare some common methods of counting.

```js
let i;
i = 0;
i;
i = i + 1;
i;
i += 1;
i;
++i;
i;
i++;
i;
```

Note: `++i` and `i++` are not the same! `++i` will increment i by 1 and then
evaluate i, whereas `i++` will evaluate i and then increment.

#### String expressions

```js
let givenName;
let surname;
let fullName;
givenName = 'Brian';
surname = 'Berzellini';
fullName = givenName + ' ' + surname;
```

Try it with your name now!

```js
bornOn = '1982-09-29';
```

What happens if you don't enter the date as a string?


#### Code Along: Boolean expressions

A boolean expression is a comparison (e.g. `>`, `>=`, `===`) or any value
interpreted as a boolean.  We'll use that fact when we get to flow control.
Boolean expression combine using the logical and `&&` and logical `||`
operators.

```js
let height = 72;
height === 60;
height > 72;
height = 76;
height > 72;
height > 72 && height < 78;
```

The logical operators 'short circuit', which means they stop evaluating operands
as soon as the expression is `false` for `&&`, or true for `||`.

##### Truthy and Falsy Values

What do you think of when you hear 'truthy' and 'falsy'?

All values in JS are inherently truthy with the exception of these 6 values:

-   `false`
-   `undefined`
-   `null`
-   `0` and `-0`
-   `NaN`
-   `''  // and "" - the empty string`

Note:  The negation of a truthy value is `false` and the negation of a falsy
value is `true`.

```js
let truthy;
let falsy;
truthy = 'A non-empty string';
falsy = 0;
!truthy;
!falsy;
```

#### Demo: Type conversions

The unary `+` operator attempts to convert its operand to a Number.  If
unsuccessful the result is `NaN`.

If either operand of the binary `+` operator is a string the operator converts
the other operator to a string.  Some results of this conversion are more useful
than others.

Note the difference between `3 + 5 + ' times';` and `'times ' + 3 + 5`;?

The unary `!` operator converts its operand to a boolean value.

For non-strict-equality comparisons with numbers, boolean values are coerced to
`1` or `0` (from `true` or `false` respectively).

### Code Along: Flow Control

Remember how we used node as a REPL earlier? It actually has a completely
different use as well--as a script runner. Let's see how that works while we
explore some examples of flow control.

To start, exit your REPL using `CTRL-d` and make sure you're in the 'lib' folder. Add 3 files using the `touch`
command from your terminal.

`touch greeter.js psychic.js forLoop.js`

#### Printing to the Console

As developers, we often want to take a look at the
inner workings of processing and just get a read on what variables store which
values at a specific time while our code is running. To do this we type
`console.log("Whatever we want to print out to the console.")`.

It's an extremely effective tool that often gets pulled out before
production, but can help give you an idea of what should be returned, and
a good point of reference for debugging.

#### `if` Statements

Open `greeter.js` and we'll type some code in...

```js
'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let name = ask("What's your name? ");
if (name === 'Brian') {
  console.log('Hi, Brian!');
} else if (name === 'Jeff') {
  console.log('Hi, Jeff!');
} else if (name === 'Chris') {
  console.log('Hi, Chris!');
} else {
  console.log('Hi, stranger.');
}
```

Save this file and return to your terminal.
Type `node greeter.js`
Type your name and hit ENTER.

Press the UP arrow on your keyboard to reload the previous line OR type
`node greeter.js` again.
Type `Lauren` and hit ENTER.

#### `while` Loops

Now go to `psychic.js`

```js
'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let count = 0;
let answer = '';

while (answer !== 'Jeff') {
  answer = ask('Guess my name? ');
  count = count + 1;
}
console.log('You got it in ' + count + ' tries!');
```

Save this file and return to your terminal.
Type `node psychic.js`
Type your name and hit ENTER.
Try your neighbor's name.
Try `Antony`.

#### `for` Loops

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Save this file and return to your terminal.
Think about what you expect this file to produce to the terminal...
Now type `node forLoop.js` and hit ENTER.

which is _almost_ equivalent to:

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

Nesting conditionals in loops:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('five!');
  } else {
    console.log('nah');
  }
}
```

Save. Think about what you expect this file to produce to the terminal...
What do we type in the terminal to run our code?

#### Lab: Build a Script Yourself

Try building your own script in the /lib directory titled `guessMyAge.js`. Have
this script ask the user their age, and if they're older than 90 print to the
console "You old fart!" If they're under the age of 10 print "Why are you on a
computer? Go outside!" If they're between 10 and 90, print "How boring...".

If you finish early, challenge yourself by designing your own script that runs
something using two or more examples of flow control we've introduced today!
Save it as it in `bonusChallenge.js`

Note: refer to the beginning lines of our `greeter.js` code to enable working
with user input.

## Additional Resources

See the following sections at
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>

-   Grammar and types
-   Control flow and error handling
-   Loops and iteration
-   Expressions and operators
-   Number and [dates](https://en.wikipedia.org/wiki/ISO_8601)
-   Text formatting

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
