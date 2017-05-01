[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Basics

## Introduction

A review of many of the building blocks of JavaScript.

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
1.  Switch to the new `training` branch.
1.  Install dependencies with `npm install`.
1.  Open the repository in Atom with `atom .`.

Note: Create and switch to a new branch at the same time with the shortcut:
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

The ES2015 primitive type `Symbol` is intentionally omitted.

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

Type `node` into your terminal to start the Node.js program REPL.
The `>` symbol tells us we are now interacting with the Node.js REPL
```bash
$ node
>
```

The first line we will run in our Node.js REPL is to `use strict`
<!-- start code block file="snippets/declareVariables1.js" -->
```js
'use strict'
```
<!-- end code block -->

Variables need to be declared.
<!-- start code block file="snippets/declareVariables2.js" -->
```js
let bornOn
```
<!-- end code block -->

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

The simplest expression is a variable or literal. More
complicated expressions are formed by combining simpler expressions using
operators.

An expression with all of the variables replaced with literals that are equal to
the values of the variables will produce the same result.

#### Code Along: Assignment expressions

Assignment changes the value of a variable.

<!-- start code block file="snippets/assignVariables1.js" -->
```js
let height
height
height = 72
height
let name
name = 'Brian'
name
```
<!-- end code block -->

Remember: JavaScript variables are untyped.

<!-- start code block file="snippets/assignVariables2.js" -->
```js
name = 'Brian'
name = 29
```
<!-- end code block -->

Although it doesn't cause an error, avoid confusing code like the above.

Now try it yourself!
Create a new variable named `developer`, and store the name of the person
sitting next to you in it. Now change it to someone else in the room!

##### Constants

Constants must be initialized, assigned a value, when created.  Uninitialized
constants are a syntax error.

<!-- start code block file="snippets/constants1.js" -->
```js
const variableOne
// const variableOne
//      ^^^^^^^^^^^^^
// SyntaxError: Missing initializer in const declaration
```
<!-- end code block -->

<!-- start code block file="snippets/constants2.js" -->
```js
const pi = 3.14159265359 // rounded
pi
const e = 2.71828182846 // rounded
e
```
<!-- end code block -->

#### Numeric expressions

Simple calculations:

<!-- start code block file="snippets/numerics1.js" -->
```js
5 + 3
7 - 2
11 % 5
```
<!-- end code block -->

Expressions with variables only change values with assignment.

<!-- start code block file="snippets/numerics2.js" -->
```js
height = 80
height - 1
height
```
<!-- end code block -->

What will `height` be at the end of the 3 lines above?

Now let's compare some common methods of counting.

<!-- start code block file="snippets/numerics3.js" -->
```js
let i
i = 0
i
i = i + 1
i
i += 1
i
++i
i
i++
i
```
<!-- end code block -->

Note: `++i` and `i++` are not the same! `++i` will increment i by 1 and then
evaluate i, whereas `i++` will evaluate i and then increment.

#### String expressions

<!-- start code block file="snippets/strings1.js" -->
```js
let givenName
let surname
let fullName
givenName = 'Brian'
surname = 'Berzellini'
fullName = givenName + ' ' + surname
```
<!-- end code block -->

Try it with your name now!

<!-- start code block file="snippets/strings2.js" -->
```js
bornOn = '1982-09-29'
```
<!-- end code block -->

What happens if you don't enter the date as a string?


#### Code Along: Boolean expressions

A boolean expression is a comparison (e.g. `>`, `>=`, `===`) or any value
interpreted as a boolean.  We'll use that fact when we get to flow control.
Boolean expression combine using the logical and `&&` and logical `||`
operators.

<!-- start code block file="snippets/boolean1.js" -->
```js
let height = 72
height === 60
height > 72
height = 76
height >= 72
height > 72 && height < 78
```
<!-- end code block -->

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
-   `''`, `""`, and ` `` `

Note:  The negation of a truthy value is `false` and the negation of a falsy
value is `true`.

<!-- start code block file="snippets/boolean2.js" -->
```js
let truthyValue
let falsyValue
truthyValue = 'A non-empty string'
falsyValue = 0
!truthyValue
!falsyValue
```
<!-- end code block -->

#### Demo: Type conversions

The unary `+` operator attempts to convert its operand to a Number.  If
unsuccessful the result is `NaN`.

If either operand of the binary `+` operator is a string the operator converts
the other operator to a string.  Some results of this conversion are more useful
than others.

Note the difference between `3 + 5 + ' times'` and `'times ' + 3 + 5`?

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

Open `ifStatement.js` and we'll type some code in...

<!-- start code block file="snippets/conditionals1.js" -->
```js
'use strict'
// We'll learn about process.argv later in the course
const name = process.argv[2]
if (name === 'Brian') {
  console.log('Hi, Brian!')
} else if (name === 'Jeff') {
  console.log('Hi, Jeff!')
} else if (name === 'Chris') {
  console.log('Hi, Chris!')
} else {
  console.log('Hi, stranger.')
}
```
<!-- end code block -->

Save this file and return to your terminal.
Type `node ifStatement.js Brian`

Press the UP arrow on your keyboard to reload the previous line and change
`Brian` to `Lauren` OR type `node ifStatement.js Lauren`. and press `return`
(`enter`).

##### Ternary Operator
Ternary operators are basically a shorthand way of writing `if else` statements. An example of a ternary operator can be found below:
<!-- start code block file="snippets/ternaryOperator1.js" -->
```js
3 > 4 ? console.log('Bigger') : console.log('Smaller')
```
<!-- end code block -->
This example might look a little bit confusing, but it is relatively simple if we break it down: First, the statement before the question mark is evaluated as being either `true` or `false`. If the statement is `true`, then the statement to the left of the colon is executed. If it is `false`, the statement to the right of the colon is executed.

#### `while` Loops

Open `whileLoop.js` and we'll type some code in...
<!-- start code block file="snippets/conditionals2.js" -->
```js
'use strict'

let count = process.argv[2]

while (count < 5) {
  console.log('Im inside of the loop, count is ' + count)
  count++
}

console.log('Im outside of the loop, count is ' + count)
```
<!-- end code block -->
Save this file and return to your terminal.
Type `node whileLoop.js 1`

Press the UP arrow on your keyboard to reload the previous line and change
`1` to `5` OR type `node whileLoop.js 5`. and press `return`
(`enter`).

Now let's look at a more advanced example of conditions and loops `bin/guess.js`
In your terminal, type `node bin/guess.js Mike`
Type `Stacey`
Type `Brian`
What results do you get?

#### String Interpolation

You may have noticed that in `bin/guess.js`, we used the variable `answer` in order to display the result of the user's input. The combination of a string and a variable is called string interpolation. To produce this interpolation is to write it as such:
<!-- start code block file="snippets/stringInterpolation1.js" -->
```js
console.log(`Sorry, your guess '${answer}', isn't correct.`)
```
<!-- end code block -->
This method of interpolating is called Template Strings.
Note: Make sure you are using backticks instead of single or double quotes.

#### `for` Loops
Open `forLoop.js` and we'll type some code in...
<!-- start code block file="snippets/loops1.js" -->
```js
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```
<!-- end code block -->

Save this file and return to your terminal.
Think about what you expect this file to produce to the terminal...
Now type `node forLoop.js` and hit ENTER.

which is _almost_ equivalent to:
<!-- start code block file="snippets/loops2.js" -->
```js
let i = 0
while (i < 10) {
  console.log(i)
  i++
}
```
<!-- end code block -->

Nesting conditionals in loops:
<!-- start code block file="snippets/loops3.js" -->
```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('five!')
  } else {
    console.log('nah')
  }
}
```
<!-- end code block -->

Save. Think about what you expect this file to produce to the terminal...
What do we type in the terminal to run our code?

#### Lab: Build a Script Yourself

Try building your own script in the file titled `lib/guessMyAge.js`. Have
this script ask the user their age, and if they're older than 90 print to the
console "You old fart!" If they're under the age of 10 print "Why are you on a
computer? Go outside!" If they're between 10 and 90, print "How boring...".
You should be able to run the file like `node lib/guessMyAge.js 100`.

If you finish early, challenge yourself by designing your own script that runs
something using two or more examples of flow control we've introduced today!
Save it as it in `bonusChallenge.js`

Note: refer to the beginning lines of our `lib/ifStatement.js` code to enable working
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
