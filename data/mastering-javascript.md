---
title: Mastering JavaScript
excerpt: JavaScript is the most important programming language for web development. You probably dont know it well enough!
image: mastering-js-thumb.png
isFeatured: false
date: '2022-08-28'
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

# 1. Values

The most fundamental unit of information in a program is a value.
Values are data. They’re how the program maintains state. Values come in two forms in JS: primitive and object.

---

> - Primitive form values in JavaScript are the basic data types that are not objects and include strings, numbers, booleans, null,symbol and undefined. Strings are sequences of characters enclosed in single or double quotes. Numbers are numeric values that can be integers or floating-point values. Booleans are true or false values. Null is an empty value that has no type( is an object type, but that because the bug we got in JS) or value. Undefined is a variable that has been declared but not assigned a value.

> - Object form values in JavaScript are the values associated with a particular object. These values can be anything from strings, numbers, booleans, arrays, functions, and even other objects. They are used to store data and provide access to that data through methods and properties.

---

#### What's interpolation in JS ?

Interpolation in JavaScript is the process of inserting a variable or expression into a string. This is done by using the template literal syntax, which uses backticks (`) instead of single or double quotes. The variable or expression is wrapped in ${}, and the result is a string with the value of the variable or expression inserted into it.


```js
var firstName = "Greg"

console.log("My name is ${ firstName }.")
// My name is ${ firstName }.
console.log('My name is ${ firstName }.')
// My name is ${ firstName }.
console.log(`My name is ${firstName}.`)
// My name is Greg.
```
