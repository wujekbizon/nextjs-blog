---
title: 'Become a TypeScript Pro'
date: '2022-12-11'
image: ts.png
excerpt: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.
isFeatured: false
---

# 1. What is TypeScript?

TypeScript is a programming language first developed by Microsoft in 2012. Its main ambition is to improve the productivity of developing complex applications.
TypeScript was released to the public in October 2012, with version 0.8, after two years of internal development at Microsoft. On November 15th we recived a stable release.

According to Wikipedia, TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

# 2. TypeScript as a superset of JavaScript.

In terms of software development, TypeScript offers many advantages over JavaScript:

1. **Optional static typing**. JavaScript is a dynamically typed language, which means that types are checked, and data type errors are only detected at runtime. This can be very dangerous and can create errors during production. TypeScript introduces optional strong static typing: once declared, a variable does not change its type and can only take specific values.

2. **Readability**. Thanks to the addition of strict types and other elements that make the code more self-expressive, you can see the design intent of the developers who originally wrote the code. This is especially important for distributed teams working on the same project. A code that speaks for itself can compensate for the lack of direct communication between team members.

3. **IDE support**. Type information renders editors and integrated development environments (IDEs) much more useful. They can offer features like code navigation and auto-complete, providing accurate suggestions.

4. **The power of object-orientation**. TypeScript supports Object-Oriented Programming (OOP) concepts such as classes, interfaces, inheritance, etc. The OOP paradigm makes it easier to build well-organized scalable code, and this advantage becomes more apparent as your project grows in size and complexity.

5. **The support of a talented community**. Behind TypeScript is a massive community of very gifted people working day by day to improve the language.

6. **Integrated support for updated versions** of ECMAScript, which is the scripting language that forms the basis of JavaScript.
7. **ECMAScript defines the standards and novelties of JavaScript**. TypeScript takes great care to include all these new features with each update.

# 3. Features.

TypeScript is a language extension that adds features to ECMAScript 6. Additional features include:

1. **Type annotations and compile-time type checking**
2. **Type inference**
3. **Type erasure**
4. **Interfaces**
5. **Enumerated types**
6. **Generics**
7. **Namespaces**
8. **Tuples**
9. **Async/await**

The following features are backported from ECMAScript 2015:

10. **Classes**
11. **Modules**
12. **Abbreviated "arrow" syntax for anonymous functions**
13. **Optional parameters and default parameters**

# 4. TypeScript Generics

Like you can see TypeScript has many features. Some of them are easy to wrap our head around , but few of them, are really tough to understand at least before you start using them.

TypeScript Generics where one of those tough one's, till I actually did few examples and understood how the whole thing works.

_Generics_ are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure. When a developer makes their component a generic component, they give that component the ability to accept and enforce typing that is passed in when the component is used, which improves code flexibility, makes components reusable, and removes duplication.

First, let's create a Tuple, as React Engineer, I'm dealing, with one particular tuple almost every day, and that's the **useState** tuple. So **useState** returns a state and then a state setter. Let's go and implement our own **simpleStringState** function, that does something similar.

```ts
// generics.ts

function simpleStringState(initial: string): [() => string, (v: string) => void] {
  let str: string = initial
  return [
    () => str,
    (v: string) => {
      str = v
    }
  ]
}

const [str1getter, str1setter] = simpleStringState('winter')
const [str2getter, str2setter] = simpleStringState('hohoho')

console.log(str1getter()) // winter
console.log(str2getter()) // hohoho

str1setter('comming')
console.log(str1getter()) // comming
console.log(str2getter()) // hohohoh
```

We're going to capture initial state of the string and then as we change it, it's going to be tracked , so it's basically a piecie of stored state. Now let's use this and I'll give it the initial value of 'winter' and let's just _console.log_ the output of **str1getter**. Then I'll create a second one and give it the initial value of 'hohoho' and also _console.log_ the output. Then I'll use **str1setter** to set it and _console.log_ to make sure that we're getting the right value.

I'll run this in a terminal to see those console logs.

```ts
npx ts-node generics.ts
```

Let's continue and make this **simpleStringState** function a generic. I'll change this function name to **simpleState**, because that is more like a generic name and replace type string with generic T. I'll comment out an old function just for the record.

```ts
// generics.ts

// function simpleStringState(
//   initial: string
// ): [() => string, (v: string) => void] {
//   let str: string = initial;
//   return [
//     () => str,
//     (v: string) => {
//       str = v;
//     },
//   ];
// }

// const [str1getter, str1setter] = simpleStringState('winter');
// const [str2getter, str2setter] = simpleStringState('hohoho');

// console.log(str1getter()); // winter
// console.log(str2getter()); // hohoho

// str1setter('comming');
// console.log(str1getter()); // comming
// console.log(str2getter()); // hohohoh

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial
  return [
    () => val,
    (v: T) => {
      val = v
    }
  ]
}

const [st1getter, st1setter] = simpleState(2022)

console.log(st1getter()) // 2022
st1setter(2023)
console.log(st1getter()) //2023

const [st2getter, st2setter] = simpleState<string | null>(null)

console.log(st2getter()) // null
st2setter('new year')
console.log(st2getter()) // new year
```

I'll run this command again to expect this values.

```ts
npx ts-node generics.ts
```

Like you can see now, this function can be use with type string as a value, or number ,or even the initial state can be null.

#### Let's challenge ourselves to re-implement _forEach()_, _map()_ and _filter()_ using reduce, and to do it in a type safe manner using Typescript.

First I'll start from implementing **myForEach** function.

```ts
// myForEach.ts
function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFunc(v)
    return undefined
  }, undefined)
}

myForEach(['awesome', 'useful', 'easy'], (v) => console.log(`TypeScript is ${v}!`))
```

In a terminal I expect to see my console.logs:

```node
npx ts-node myForEach.ts
-------------------------
TypeScript is awesome!
TypeScript is useful!
TypeScript is easy!
-------------------------
```

Next let's implement **myFilter** function, which might be more challenging, but let's try it anyway.

```ts
// myFilter.ts

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a: T[], v) => (filterFunc(v) ? [...a, v] : a), [])
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8], (v) => v % 2 === 0))
```

In a terminal I expect to see my console.logs:

```node
npx ts-node myFilter.ts
-------------------------
[ 2, 4, 6, 8 ]
-------------------------
```

So, this is also working, nice. Now, the last to implement is **myMap** function.

```ts
// myMap.ts

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[])
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8], (v) => (v * 10).toString()))
```

In a terminal I expect to see my console.logs:

```node
npx ts-node myMap.ts
-------------------------
[
  '10', '20', '30',
  '40', '50', '60',
  '70', '80'
]
-------------------------
```

Everything seems to work nicely, **myMap** function return a new array with all numbers multiply by 10 and as a string, perfect.

# 5. More TypeScript content coming soon..

For now that's it, I will see you next time with more TypeScript content. Like always if you liked this, you can leave a star on my github account, link **[nextjs-blog](https://github.com/wujekbizon/nextjs-blog)**.

### Grzegorz Wolfinger

_React Developer | Software Engineer | Javascript Engineer_
