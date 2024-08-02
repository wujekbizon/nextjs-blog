---
title: 'Become a TypeScript Pro 2024'
date: '2024-08-02'
image: ts.png
excerpt: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.
isFeatured: false
---

# 1. What is TypeScript?

TypeScript is a programming language first developed by Microsoft in 2012. Its main ambition is to improve the productivity of developing complex applications.
TypeScript was released to the public in October 2012, with version 0.8, after two years of internal development at Microsoft. On November 15th we received a stable release.

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

The following features are back ported from ECMAScript 2015:

10. **Classes**
11. **Modules**
12. **Abbreviated "arrow" syntax for anonymous functions**
13. **Optional parameters and default parameters**

# 4. Type Annotations

TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.

```ts
let someName: string = 'someName';
someName = 'something else';
someName = someName.toUpperCase();
someName = 20; // line will throw error `Type 'number' is not assignable to type 'string'.`

console.log(someName);

let amount: number = 12;
amount = 12 - 1;
amount = 'pants'; // line will throw error `Type 'string' is not assignable to type 'number'.`

let isAwesome: boolean = true;
isAwesome = false;
isAwesome = 'gregIsAwesome'; // line will throw error `Type 'string' is not assignable to type 'boolean'.`
```

# 5. Type Inference

The typescript compiler can infer the type of the variable based on the literal value that is assigned when it is defined. Just make sure you are working in the typescript file

```ts

let awesomeName = 'greg';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
awesomeName = 20; // line will throw error `Type 'string' is not assignable to type 'boolean'.`

```

# 6. Union Type

In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values.

```ts

let tax: number | string = 10;
tax = 100;
tax = '$10';

//  literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';

```

# 7. Type - "any"

In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type can hold a value of any type. Later will also cover - "unknown" and "never"

```ts
let notSure: any = 4;
console.log(typeof(notSure)) // number
notSure = 'maybe a string instead';
console.log(typeof(notSure)) // string
notSure = false; // okay, definitely a boolean
console.log(typeof(notSure)) // boolean
```

# 8. Practical Application of Type Annotation

```ts
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    console.log(book)
    break;
  }
}

console.log(foundBook?.length); // 4

```

The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code (including your future self) that foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps prevent bugs related to undefined values.

```ts
// 1. Order Status
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
// orderStatus = 'cancelled'; // This will result in a TypeScript error

// 2. Discount
let discount: number | string = 20;
discount = '20%';
// discount = true; // This will result in a TypeScript error

```

# 9. Arrays - Fundamentals

In TypeScript, arrays are used to store multiple values in a single variable. You can define the type of elements that an array can hold using type annotations.

```ts

let prices: number[] = [100, 75, 42];

let fruit: string[] = ['apple', 'orange'];
// This will result in a TypeScript errors:
fruit.push(1); // Argument of type 'number' is not assignable to parameter of type 'string'.
let people: string[] = ['bobo', 'peter', 1]; // Type 'number' is not assignable to type 'string'.

// be careful "[]" means literally empty array
let randomValues: [] = [1]; // Type '[number]' is not assignable to type '[]'. Source has 1 element(s) but target allows only 0.

// be careful with inferred array types
let names = ['peter', 'susan']; // Cannot redeclare block-scoped variable 'names'.
let names = ['peter', 'susan', 1]; // Cannot redeclare block-scoped variable 'names'.
let array: (string | boolean)[] = ['apple', true, 'orange', false];

```

```ts

// 1. Temperatures
let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot'); // This will result in a TypeScript error

// 2. Colors
let colors: string[] = ['red', 'green', 'blue'];
// colors.push(true); // This will result in a TypeScript error

// 3. Mixed Array
let mixedArray: (number | string)[] = [1, 'two', 3];
// mixedArray.push(true); // This will result in a TypeScript error

```

# 10. Objects - Fundamentals

In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.

```ts
let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
car.color = 'blue'; // Error: Property 'color' does not exist on type '{ brand: string; year: number; }'.

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
let car2: { brand: string; year: number } = { brand: 'audi' }; // Error: Property 'year' is missing in type '{ brand: string; }' but required in type '{ brand: string; year: number; }'.

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property

```

```ts

// 1. Bike
let bike: { brand: string; year: number } = { brand: 'Yamaha', year: 2010 };
bike.year = 'old'; // This will result in a TypeScript error Type 'string' is not assignable to type 'number'.

// 2. Laptop
let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
let laptop2: { brand: string, year: number } = { brand: 'HP' }; // This will result in a TypeScript error
// Property 'year' is missing in type '{ brand: string; }' but required in type '{ brand: string; year: number; }'.

// 3. Products
let product1 = { title: 'Shirt', price: 20 };
let product2 = { title: 'Pants' };
let products: { title: string; price?: number }[] = [product1, product2];
products.push({ title: 'Shoes', price: 'expensive' }); // This will result in a TypeScript error Type 'string' is not assignable to type 'number'.

```

# 11. Functions - Fundamentals

In TypeScript, functions can have typed parameters and return values, which provides static type checking and autocompletion support.

```ts

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}

sayHi('greg');
sayHi(3) // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
sayHi('peter', 'random'); // Error: Expected 1 arguments, but got 2.

function calculateDiscount(price: number): number {
  price.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.
  const hasDiscount = true;
  if (hasDiscount) {
    // return price; // Proper return statement
    return 'Discount Applied'; // Error: Type 'string' is not assignable to type 'number'.
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

// "any" example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}
const result = addThree(2);
const someValue = result;

// run time error
someValue.myMethod();

```

```ts

const names: string[] = ['John', 'Jane', 'Jim', 'Jill'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = 'Jane';
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`); // Expected:  "Jane is in the list."
} else {
  console.log(`${nameToCheck} is not in the list.`);
}

```

# 12. Functions - Optional and Default Parameters

In TypeScript, a default parameter value is an alternative to an optional parameter. When you provide a default value for a parameter, you're essentially making it optional because you're specifying a value that the function will use if no argument is provided for that parameter.

However, there's a key difference between a parameter with a default value and an optional parameter. If a parameter has a default value, and you call the function without providing an argument for that parameter, the function will use the default value. But if a parameter is optional (indicated with a ?), and you call the function without providing an argument for that parameter, the value of the parameter inside the function will be undefined. A function with optional parameters must work when they are not supplied

```ts
function calculatePrice(price: number, discount?: number) {
  // return price - (discount) // Error : Object is possibly 'undefined'.
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80

let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); // Output: 300

function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); // Output: 80

let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); // Output: 300

```

# 13. Function - rest parameter

In JavaScript, a rest parameter is denoted by three dots (...) before the parameter's name and allows a function to accept any number of arguments. These arguments are collected into an array, which can be accessed within the function.

```ts

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // [2, 4, 6, 8, 10]

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}

let result = sum('The total is:', 1, 2, 3, 4, 5);
console.log(result); // result will be "The total is: 15"
```

# 14. Functions - "void" return type

In TypeScript, void is a special type that represents the absence of a value. When used as a function return type, void indicates that the function does not return a value.

```ts
function logMessage(message: string): void {
  console.log(message);
}

logMessage('Hello, TypeScript!'); // Output: Hello, TypeScript!

```

It's important to note that in TypeScript, a function that is declared with a void return type can still return a value, but the value will be ignored.For example, the following code is valid TypeScript:

```ts

function logMessage(message: string): void {
  console.log(message);
  return 'This value is ignored'; // compiler will give us a error: Type 'string' is not assignable to type 'void'.
  // But it will run our code
}

logMessage('Hello, TypeScript!'); // Output: Hello, TypeScript!

```

# 15. Functions - Using Union Types as Function Parameters

```ts

function processInput(input: string | number) {
 if (typeof input === 'number') {
   console.log(input * 2);
 } else {
   console.log(input.toUpperCase());
 }
}

processInput(10); // Output: 20
processInput('Hello'); // Output: HELLO

```

In this example, the processInput function takes a parameter input that can be either a string or a number. Inside the function, we use a type guard (typeof input === 'number') to check the type of input at runtime. If input is a number, we double it. If input is a string, we convert it to uppercase.

# 16. Functions - Using Objects as Function Parameters

```ts

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second); // {"id": 1,"isActive": false},  { "id": 2, "isActive": true}

// alternative
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to our class ${student.name.toUpperCase()}!`); // "Welcome to our class GREG!"
}

const newStudent = {
  id: 5,
  name: 'Greg',
};

createStudent(newStudent);

```

# 17. Excess Property Checks

```ts
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to our class ${student.name.toUpperCase()}!`);
}

const newStudent = {
  id: 7,
  name: 'Greg',
  email: 'greg@gmail.com',
};

createStudent(newStudent); // typescript skipped check on reference object
createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' }); // Error: Object literal may only specify known properties, and 'email' does not exist in type '{ id: number; name: string; }'.

```

TypeScript only performs excess property checks on object literals where they're used, not on references to them.

In TypeScript, when you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. This is done to catch common errors.

However, when you pass newStudent to createStudent, TypeScript doesn't complain about the email property. This is because newStudent is not an object literal at the point where it's passed to createStudent.

```ts
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(10)); // Output: 100
console.log(processData('Hello')); // Output: HELLO
console.log(processData('Hello', { reverse: true })); // Output: OLLEH
```

# 18. Type Alias

A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. However, it's important to note that it doesn't create a new unique type - it's just an alias. All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly.

```ts

const greg: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'greg',
  isActive: true,
};
const robert: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'robert',
  isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()}!`);

  return user;
}
createUser(greg); // "Hello there GREG!"
createUser(robert); // "Hello there ROBERT!"
```

```ts
type User = { id: number; name: string; isActive: boolean };

const greg: User = {
  id: 1,
  name: 'greg',
  isActive: true,
};
const robert: User = {
  id: 1,
  name: 'robert',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()}`);
  return user;
}

createUser(greg); // "Hello there GREG"

type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = 'hello'; // This is valid
value = 123; // This is also valid

type Theme = 'light' | 'dark'; // Type alias for theme

let theme: Theme;
theme = 'light'; // This is valid
theme = 'dark'; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
  console.log(theme);
}

setTheme('dark'); // This will set the theme to 'dark' and print "dark"
```

```ts
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(bob); // Outputs: "Bob is a manager of 2 employees."
```

# 19. Intersection Types

In TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one. This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. It's a way of creating a new type that merges the properties of existing types.

```ts

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 2,
  name: 'Beneath the Crimson Moon',
  price: 15,
};

const book2: Book = {
  id: 3,
  name: 'Beyond the Veil of Perception',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'In the Labyrinth of Lost Souls',
  price: 25,
  discount: 0.15,
};

```

# 20 Type Alias - Computed Properties

Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects. This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.

```ts

const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

console.log(tiger) // { "age": 5 }

```

# 21. Interface - Fundamentals

Allow to setup shape for objects (only objects)

```ts

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
};

deepWork.title = 'New Title';
deepWork.isbn = 654321; // error:  Cannot assign to 'isbn' because it is a read-only property.

```

# 22. Interface - Methods

```ts
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;

  // methods
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Atomic Habits',
  author: 'Clear James',
  genre: 'Self-growth',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};
deepWork.printAuthor(); // "Clear James"
const result = deepWork.printTitle('is an awesome book');
console.log(result); // "Atomic Habits is an awesome book"

```

It's generally a good practice to match the structure of the interface and the implementing object or class as closely as possible. This makes the code easier to understand and maintain. So, if printAuthor is defined as a method in the Book interface, it would be more consistent to implement it as a method in the deepWork object.

```ts
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Atomic Habits',
  author: 'Clear James',
  genre: 'Self-growth',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option function keyword
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // second option arrow function
  // printSomething: (someValue) => {
  //  // we need to remember that "this" keyword points to global `this`
  //  // so instead we need to directly access our object and author `deepWork.author`
  //  console.log(deepWork.author);
  //  return someValue;
  // },
  // third option
  printSomething(someValue) {
    return someValue;
  },
  // alternative
  // printAuthor: () => {
  //   console.log(deepWork.author);
  // },
};
console.log(deepWork.printSomething(34));  // 34

deepWork.printAuthor(); // "Clear James"
const result = deepWork.printTitle('is an awesome book');
console.log(result); // "Atomic Habits is an awesome book"
```

```ts
interface Computer {
  readonly id: number; // cannot be changed once initialized
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number; // optional property
}

const laptop: Computer = {
  id: 1,
  brand: 'random brand',
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256; // assigning value to optional property

console.log(laptop.upgradeRam(4)); // upgrades RAM by 4GB to 12 GB total
console.log(laptop); // print: { "id": 1, "brand": "random brand", "ram": 12,"storage": 256 }

```

# 23. Interface - Merging, Extend, TypeGuard

```ts

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging (reopening) an interface in TypeScript is a process where you declare an interface
// with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person {
  age: number;
}

// Usage
const person: Person = {
  name: 'John',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person); // { "name": "Greg", "age": 30 }

// Extending an interface in TypeScript is a way to create a new interface that inherits the
// properties and methods of an existing interface. You use the extends keyword to do this.
// When you extend an interface, the new interface will have all the members of the base interface,
// plus any new members that you add.

// Extending the interface
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'stacy',
  age: 32,
  employeeId: 111,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

console.log(employee.getDetails()); // "Name: stacy, Age: 32, Employee ID: 111"


// Interface multiple inheritance
interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'Bob',
  age: 35,
  dogName: 'Bethoven',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
};

console.log(manager.managePeople()); // "Managing people..."

```

```ts
interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'john',
    };
  } else if (random < 0.66) {
    return {
      name: 'sarah',
      dogName: 'Rex',
    };
  } else {
    return {
      name: 'bob',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Delegating tasks...'),
    };
  }
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee); // this will randomly generate one of this 3 employee types

/*
A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean,
but also asserts that the argument is of a specific type if the function returns true.
It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope.
The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.
*/

// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj;
// }

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.delegateTasks(); // "Delegating tasks..."
}

function isDogOwner (obj: Person | DogOwner | Manager): obj is DogOwner {
  return "dogName" in obj;
}

if (isDogOwner(employee)) {
  console.log(employee.dogName);  // "Rex"
}

```

# 24. Interface vs Type Alias

A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defined, the alias can be used anywhere in place of the actual type.

```ts

type Person = {
  name: string;
  age: number;
};

let greg: Person = { name: 'Greg', age: 42 };
```

An interface is a way to define a contract for a certain structure of an object.

```ts
interface Person {
  name: string;
  age: number;
}

let greg: Person = { name: 'Greg', age: 38 };
```

Key Differences:

- Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.

```ts
// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = 'up' | 'down' | 'left' | 'right';

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = 'up';

```

- Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, TypeScript will merge their definitions. Type aliases can't be merged in this way.
- Interfaces can be implemented by classes, while type aliases cannot.
- Type aliases can use computed properties, while interfaces cannot.

```ts
interface Person {
  name: string;
  greet(): void;
}

class Employee implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let bob = new Employee('Bob');
bob.greet(); // Outputs: Hello, my name is Bob
```

```ts
const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
console.log(tiger); // { "age": 5 }

```

# 25. Tuples

In TypeScript, a Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same - in other words it's an array with fixed length and ordered with fixed types. This is useful when you want to group different types of values together.

Tuples are useful when you want to return multiple values from a function.

By default, tuples in TypeScript are not read-only. This means you can modify the values of the elements in the tuple.However, TypeScript does provide a way to make tuples read-only using the readonly keyword.

```ts
let person: [string, number] = ['john', 25];
console.log(person[0]); // Outputs: john
console.log(person[1]); // Outputs: 25

let john: [string, number?] = ['john'];

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]); // Outputs: john
console.log(randomPerson[1]); // Outputs: 25

// let susan: [string, number] = ['susan', 25];
// susan[0] = 'bob';
// susan.push('some random value');
// console.log(susan); // Outputs:: ["bob", 25, "some random value"]

let susan: readonly [string, number] = ['susan', 25];
// susan[0] = 'bob'; // Error: Cannot assign to '0' because it is a read-only property.
// susan.push('some random value'); // Error: Property 'push' does not exist on type 'readonly [string, number]'
console.log(susan);
```

# 25. Enums

Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

```ts
enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response); //  { "result": 200, "data": [ "first item", "second item"] }

```

````ts

# 26. Enums - Reverse Mapping

In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.

```ts

enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus).forEach((value) => {
  console.log(value);
});

// since we have number values we have this reverse mapping an values are assign
// as strings which is not what we want
console.log(ServerResponseStatus); // { "200": "Success", "500": "Error", "Success": 200,  "Error": 500 }

enum ServerResponseStatus {
  Success = 'Success',
  Error = 'Error',
}

Object.values(ServerResponseStatus).forEach((value) => {
  console.log(value);
});

// incase of strings everything is correct no reverse mapping
console.log(ServerResponseStatus); // { "Success": "Success", "Error": "Error" }

````

```ts
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value);
  }
});

// we still have reverse mapping but thanks to type guard now we have our values
// assign as numbers and that's what we want it
console.log(ServerResponseStatus); // { "200": "Success","500": "Error", "Success": 200, "Error": 500 }

```

```ts

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = 'Value',
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue); // 1

let stringEnumValue: StringEnum = 'Value'; // Error: Type '"Value"' is not assignable to type 'StringEnum'.

```

```ts
enum ServerResponseStatus {
  // Success = 'Success', // this will not work with string enum
  Success = 200, // but it's ok with number
  Error = 'Error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    // result: ServerResponseStatus.Success,
    // result: 'Success', // this will not work with string enum
    result: 200, // but it's ok with number
    data: ['first item', 'second item'],
  };
}

```

```ts

// Define an enum named UserRole
// By default will assign from 0
enum UserRole {
  Admin, // Admin = 0
  Manager, // Manager = 1
  Employee, // Employee = 2
}

// Define a type alias named User
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // Tuple: [email, phone]
};

// Define a function named createUser
function createUser(user: User): User {
  return user;
}

// Call the createUser function
const user: User = createUser({
  id: 1,
  name: 'John Doe',
  role: UserRole.Admin,
  contact: ['john.doe@example.com', '123-456-7890'],
});

console.log(user); // {  "id": 1,  "name": "John Doe",  "role": 0,  "contact": [    "john.doe@example.com", "123-456-7890"  ] }

```

# 26. Type Assertion

Type assertion in TypeScript is a way to tell the compiler what the type of an existing variable is. This is especially useful when you know more about the type of a variable than TypeScript does.

```ts
let someValue: any = 'This is a string';

// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';


// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name); // this will return "Eagle"
console.log(dog.name); // this will be undefined

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

// statusValue is a string and typescript won't let us to assign to status ,
// so we need to let know typescript that we sure that is type Status by type assertion
const user: User = { name: 'john', status: statusValue as Status };

```

# 27. Type "unknown"

The unknown type in TypeScript is a type-safe counterpart of the any type. It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it. For example : "error instanceof Error" checks if the error object is an instance of the Error class.

```ts
let unknownValue: unknown;

// Assign different types of values to unknownValue
unknownValue = 'Hello World'; // OK
unknownValue = [1, 2, 3]; // OK
unknownValue = 42.3344556; // OK

// unknownValue.toFixed( ); // Error: Object is of type 'unknown'

// Now, let's try to use unknownValue
if (typeof unknownValue === 'number') {
  // TypeScript knows that unknownValue is a number in this block
  console.log(unknownValue.toFixed(2)); // OK and it will print : "42.33"
}

// based on random number we can generate what exception we throw, it might be an Error instance or string.
function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
    console.log('there was an error....');
  }
}

```

# 28. Type "never"

In TypeScript, never is a type that represents the type of values that never occur. You can't assign any value to a variable of type never. TypeScript will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.

```ts

// let someValue: never = 0;

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme) {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }

 theme;  // theme is of type never, because it can never have a value that is neither 'light' or 'dark'.
}

```

```ts
enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    // case Color.Green:
    // return 'Green'; // we forgot adding 3 case by mistake
    // but thanks to never we catch it ealier in built time
    default:
      // at build time `never` sometimes might help
      let unexpectedColor :never = color;
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`);   // also we throw Error in runtime
  }
}

console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue
console.log(getColorName(Color.Green)); // Green
```

# 29. Modules - Global Scope

If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope. In this case, declaring the same variable in two different files would cause a conflict. If we add import or export keyword, typescript will treet our file as module which will fox our issues. Or if we don't want that we can add option in our tsconfig.json file:

```json
"moduleDetection": "force",
```

# 30. Modules - Imports/Exports (including types)

```ts
// helpers.ts
// we declere our helpers functions in helpers.ts file and we export them
export function sayHello(name: string): void {
  console.log(`Hello ${name}!`);
}

export let person = 'susan';

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: 'peter',
  age: 24,
};

export default newStudent;
```

```ts
// main.ts
// now we can impoprt them to our main.ts file and use it.
import newStudent, { sayHello, person, type Student } from './helpers';

sayHello('TypeScript'); // Outputs: "Hello TypeScript!"
console.log(person);  // Outputs: "susan"
console.log(newStudent); // Outputs: {"name": "peter", "age": 24 }

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};

console.log(anotherStudent); // Outputs: { "name": "bob","age": 23 }

```

Modules - Javascript Files

When we set "allowJs": true in your tsconfig.json, TypeScript will process JavaScript files and can infer types to a certain extent based on the structure and usage of your JavaScript code.

However, TypeScript's ability to infer types from JavaScript is not as robust as when working with TypeScript files. For example, it might not be able to infer complex types or types that depend on runtime behavior.

# 31. Type Guarding

Type guarding is a term in TypeScript that refers to the ability to narrow down the type of an object within a certain scope. This is usually done using conditional statements that check the type of an object.

In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type in some scope.

```ts
// we provide type alias
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

// we using type guard to check for different type and based on that we output our console.log
function checkValue(value: ValueType) {
  if (typeof value === 'string') {
    console.log(value.toLowerCase()); // "hello"
    return;
  }
  if (typeof value === 'number') {
    console.log(value.toFixed(2)); // 123.46
    return;
  }
  console.log(`boolean: ${value}`); // "boolean: true"
}

checkValue(value);

```

# 34. TypeScript Generics

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

We're going to capture initial state of the string and then as we change it, it's going to be tracked, so it's basically a piece of stored state. Now let's use this, and I'll give it the initial value of 'winter' and let's just _console.log_ the output of **str1getter**. Then I'll create a second one and give it the initial value of 'hohoho' and also _console.log_ the output. Then I'll use **str1setter** to set it and _console.log_ to make sure that we're getting the right value.

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

For now that's it, I will see you next time with more TypeScript content. Like always if you liked this, you can leave a star on my GitHub account, link **[nextjs-blog](https://github.com/wujekbizon/nextjs-blog)**.

### Grzegorz Wolfinger

_React Developer | Software Engineer | Javascript Engineer_
If you found this blog helpful, and you want to support my work, you can:
[BuyMeACoffee](https://www.buymeacoffee.com/grzegorzwolfinger)
