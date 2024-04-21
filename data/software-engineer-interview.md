---
title: Software Engineer Interview
excerpt: JavaScript is the most important programming language for web development. You probably dont know it well enough!
image: interview.jpg
isFeatured: false
date: '2024-03-27'
---

# 20 most used JavaScript's methods.

#### 1. Array.map() - Higher-Order Function.

Description: This method creates a new array with the results of calling a provided function on every element in the calling array.

Example:

```ts
  const number: number[] = [1,2,3];
  const doubleNumbers = number.map((num) => num * 2 );
  console.log(doubleNumbers); // Output: [2, 4, 6]
```

Practical Example:

```ts
interface Product {
  id:string | number;
  name:string;
  price:number;
}

const products : Product[] = [
  {
    id:1,
    name: "Apple",
    price: 1.5
  },
  {
   id:2,
    name: "Banana",
    price: 0.75
  }
]

const doubleProductsPrices = products.map(product => ({...product, price: product.price *2}))
console.log(doubleProductsPrices); //[{"id":1,"name":"Apple","price":3},{"id":2,"name":"Banana","price":1.5}]
```

#### 2. Array.filter() - Higher-Order Function

Description: Creates a new array with all elements that pass the test implemented by the provided function.
Example:

```ts
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers); // [2,4];
```

Practical Example: Filtering products based on price range in an e-commerce application.

```ts

interface Product {
  id:string | number;
  name:string;
  price:number;
}

const products: Product [] = [
  {
    id:1,
    name: "T-Shirt",
    price: 20
  },
  {
    id:2,
    name: "Laptop",
    price: 1000
  },
  {
    id:3,
    name: "Headphones",
    price: 50
  }
]

const discountedProducts = products.filter((product) => product.price < 100 );
console.log(discountedProducts); // [{"id":1,"name":"T-Shirt","price":20},{"id":3,"name":"Headphones","price":50}]

```

#### 3. Array.reduce() - Higher-Order Function

Description: Reduces an array to a single value by applying a function against an accumulator and each element (from left to right)
Example:

```ts
const numbers = [1,2,3,4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

Practical Example: Calculating the total cost of items in a shopping cart.

```ts

const cart = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 15 },
  { name: "Item 3", price: 70 },
  { name: "Item 4", price: 15.3 },
  { name: "Item 5", price: 33 },
  { name: "Item 6", price: 1100 },
  { name: "Item 7", price: 100 },
  { name: "Item 8", price: 515 },
]

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // 1858.3

```

```ts

const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 22, city: "New York" },
];

const groupedByCity = people.reduce((acc, person) => {
  // Check if a city group already exists in the accumulator
  if(acc[person.city]) {
    acc[person.city].push(person); // Add person to existing group
  } else {
    acc[person.city] = [person]; // Create a new group for the city
  }

  return acc;
},{})

console.log(groupedByCity);
// Output: {
//   "New York": [
//     { name: "Alice", age: 25, city: "New York" },
//     { name: "Charlie", age: 22, city: "New York" }
//   ],
//   "Los Angeles": [{ name: "Bob", age: 30, city: "Los Angeles" }]
// }

```

#### Array.forEach() - Higher-Order Function.

Description: Executes a provided function once for each element in an array. Unlike map() and filter(), it doesn't return a new array.
Example:

```ts
const numbers = [1,2,3];
numbers.forEach((num) => console.log(num * 2)); // Output: 2, 4, 6 (printed on separate lines)

```

Practical Example: Updating elements in an array conditionally (without creating a new array)

```ts
const products = [
  { id: 1, name: "T-Shirt", price: 10 },
  { id: 2, name: "Laptop", price: 1000 },
];

products.forEach((product) => {
  if(product.price > 50) {
    product.price *= 0.9;  // Apply 10% discount
  }
})

console.log(products); // Output: [{ id: 1, name: "T-Shirt", price: 9 }, { id: 2, name: "Laptop", price: 900 }] (original array is modified)

```

#### Array.find() - Higher-Order Function.

Description: Returns the first element in the array that satisfies the provided testing function. If no element is found, it returns undefined.

Example:

```ts
const numbers = [1,2,3,4,5];
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber); // 2

```

Practical Example: Finding a user by ID in a user management system.

```ts
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Greg"}
];

const userById = users.find((user) => user.id === 3);
console.log(userById); //  { id: 3, name: "Greg"}
```

#### Array.findIndex() - Higher-Order Function

Description: Similar to find(), but instead of the element itself, it returns the index of the first element that passes the test. If no element is found, it returns -1.

```ts
const numbers = [1,2,3,4,5];
const indexOfFirstEven = numbers.findIndex((num) => num % 2 === 0);
console.log(indexOfFirstEven); // 1
```

Practical Example: Finding the index of an item to remove from an array (e.g. shopping cart).

```ts
const cart = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const itemToRemoveId = 2;
const itemToRemoveIndex = cart.findIndex((item) => item.id === itemToRemoveId);

if (itemToRemoveIndex !== -1) {
  cart.splice(itemToRemoveIndex, 1) // Remove item from cart using its index
}

console.log(cart); // Output: [{ id: 1, name: "Item 1" }, { id: 3, name: "Item 3" }] (item with ID 2 is removed)

```

#### Array.some() - Higher-Order Function.

Description: Checks if at least one element in the array passes the test implemented by the provided function. Returns true if any element passes, false otherwise.

```ts
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // Output: true
```

Practical Example: Checking if a user list contains at least one admin user.
