---
title: Mastering JavaScript
excerpt: JavaScript is the most important programming language for web development. You probably dont know it well enough!
image: mastering-js-thumb.png
isFeatured: true
date: '2023-02-28'
---

JavaScript powers the web - it's **the** most important programming language you need to know as a web developer.

For example, you should understand code like this:

```js
const basics = 'Okay, that should not be too difficult actually';

function printBasics() {
  console.log(basics):
}

printBasics();
```

# 1. Values.

The most fundamental unit of information in a program is a value.
Values are data. They’re how the program maintains state. Values come in two forms in JS: primitive and object.

---

> - Primitive form values in JavaScript are the basic data types that are not objects and include strings, numbers, booleans, null,symbol and undefined. Strings are sequences of characters enclosed in single or double quotes. Numbers are numeric values that can be integers or floating-point values. Booleans are true or false values. Null is an empty value that has no type( is an object type, but that because the bug we got in JS) or value. Undefined is a variable that has been declared but not assigned a value.

> - Object form values in JavaScript are the values associated with a particular object. These values can be anything from strings, numbers, booleans, arrays, functions, and even other objects. They are used to store data and provide access to that data through methods and properties.

---

#### What's interpolation in JS ?

Interpolation in JavaScript is the process of inserting a variable or expression into a string. This is done by using the template literal syntax, which uses backticks (`) instead of single or double quotes. The variable or expression is wrapped in ${}, and the result is a string with the value of the variable or expression inserted into it.

```js
var firstName = 'Greg'

console.log('My name is ${ firstName }.')
// My name is ${ firstName }.
console.log("My name is ${ firstName }.")
// My name is ${ firstName }.
console.log(`My name is ${firstName}.`)
// My name is Greg.
```

#### Value Type Determination

For distinguishing values, the typeof operator tells you its
built-in type, if primitive, or "object" otherwise:

```js
typeof 42 // "number"
typeof 'abc' // "string"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" --bug! it's should be null
typeof { a: 1 } // "object"
typeof [1, 2, 3] // "object"
typeof function hello() {} // "function"
```

# 2. Declaring and Using Variables.

Values in JavaScript programs can be literal or stored in variables. Variables are like containers for values and must be declared before they can be used. There are various syntax forms for declaring variables, each with its own implications. Each with different pros and cons.

---

> - **Const**: Const is a keyword used to declare a constant variable. A constant variable is a variable that cannot be reassigned or redeclared. Pros: Prevents accidental reassignment of variables, provides better code readability. Cons: Cannot be reassigned or redeclared.

> - **Let**: Let is a keyword used to declare a block-scoped variable. Variables declared with let can be reassigned but not redeclared within the same scope. Pros: Prevents accidental reassignment of variables, provides better code readability, allows for dynamic changes in code within the same scope. Cons: Cannot be redeclared within the same scope.

> - **Var**: Var is a keyword used to declare a variable. Variables declared with var can be reassigned and redeclared. Pros: Allows for flexibility in coding, allows for dynamic changes in code. Cons: Can lead to unexpected results if not used carefully.

---

#### Besides var / let / const, there are other syntactic forms that declare identifiers (variables) in various scopes. For example:

```js
function greet(timeOfDay, person) {
  console.log(`Good ${timeOfDay}, ${person}`)
}

greet('morning', 'Greg Wolf');
// Good morning, Greg Wolf
```

The identifier **greet** is created in the outer scope, and it’s also
automatically associated so that it references the function. But
the named parameters **timeOfDay** and **person** are created only inside the function,
and thus are only accessible inside that function’s scope. **greet**,
**timeOfDay** and **person** generally behave as var -declared.

#### Another syntax that declares a variable is a catch clause:

```js
try {
  someFunction()
} catch (err) {
  console.log(err)
}
```

The **err** is a block-scoped variable that exists only inside the
**catch** clause, as if it had been declared with **let**.

#### Coercive Equality '==' and '==='

Examples in which, we should not avoid **==** over **===**, when comparison is between the same value type, both **==** and **===** do exactly the same thing, no difference whatsoever.

```js
var studentName1 = 'Frank';
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2 // true
studentName1 === studentName2 // true

workshopEnrollment1 == workshopEnrollment2 // true
workshopEnrollment1 === workshopEnrollment2 // true
```

Here are example where the types are different, but it's still better to use **==** over **===**, because the code is shorter and better because is more readable.

```js
var workshop1 = {topic: null};
var workshop2 = {};

if(
   (workshop1.topic === null || workshop1.topic === undefined) &&
   (workshop2.topic === null || workshop2.topic === undefined) &&
) {
  // ..
}

if (
  workshop1.topic == null &&
  workshop2.topic == null
)

```

#### Like every other operation, is coercion helpful in an equality comparison or not ?

> - **==** is _not_ about comparisons with unknown types.
> - **==** is about comparisons with known type(s), optionally where conversion are helpful.

---

> JavaScript has a (dynamic) type system, which uses various forms of coercion for value type conversion, including equality comparisons.

> You simply cannot write quality JS programs without knowing the types involved in your operations.

---

# 3. Scope / Closures
