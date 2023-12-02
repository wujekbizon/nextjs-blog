---
title: 'C++ Mastery: Unveiling the Power of Pointers.'
date: '2023-12-02'
image: point.jpg
excerpt:  "From the fundamentals of C++ to the more advanced concept of pointers, this comprehensive guide will steer you through the basics and beyond, providing you with a solid foundation to unleash your programming skills."
isFeatured: true
---

## 1. Introduction to C++

I must say that the title of this blog is very promising. Right from the beginning, it conveys something of great importance to anyone who reads it.
I understand that some of you who are just starting to learn C++ might be curious as to why I am beginning with such an advanced topic like pointers.
Well, the answer is simple. There are numerous excellent, beginner-friendly tutorials available, and many of them are free. They can be found all over the internet.
So, instead of creating yet another beginner's guide to mastering C++, I have decided to create a guide where we can delve into more advanced topics or topics that may appear beginner-level at first glance but are actually crucial for complete comprehension.

I intend to prepare a C++ guide, similar to my previous guides, primarily for my own reference. I want to consolidate all the significant information that I, as a developer, utilize on a daily basis in one place. However, this does not mean that I am only writing it for myself. NO.

I want to share my knowledge, what I have learned up to this point in my career, and I want to share it with all of you who are seeking it out. I firmly believe that we are entering a fascinating era in modern software development. We should all share our knowledge with one another so that we can grow as developers.

Let's not wait any longer and, let's delve deep into the world of memory and pointers in C++.

## 2. What exactly are pointers in C++ ?

---

###### Pointers are variables that store memory addresses. They allow programmers to manipulate and access data indirectly, by referring to the memory address where the data resides. Pointers are widely used in C++ for dynamic memory allocation, passing parameters to functions by reference, and working with arrays and data structures. They are denoted by an asterisk (\*) in their declaration and can be used to perform operations such as dereferencing (accessing the value stored at the memory address) and address-of (getting the memory address of a variable). Pointers can be initialized to a null value, indicating that they are not currently pointing to any valid memory location. Proper use of pointers is crucial to ensure memory safety and avoid common pitfalls such as dangling pointers and memory leaks.

---

Right now, we should have some basic understanding of what pointers are. Let's write some code!

To declare and initialize a pointer is the same as declaring and initializing a regular variable. We need to specify a type, and this is really important if we do not initialize our pointer with an address - implicitly, it will be initialized with **nullptr**. This basically means that the pointer doesn't point anywhere yet. When we try to print the standard output, we should see 0. In my opinion, it is more readable to explicitly state that the pointer is initialized with **nullptr**. Let's see some examples below.

```cpp

  // Declare and initialize variable
   int intData{56};

  // Declare and initialize pointer
   int *pNumber{}; // will initialize with nullptr
   double *pFractionalNumber{};
   std::cout << pNumber; // 0

   // Explicitly initialize with nullptr
   int *pNumber1{nullptr};
   double *pFractionalNumber1{nullptr};

```

We can initialize a pointer and assign it data. We can point our pointer to some variable address.
To do that, we can use the address operator - **&**. We can also change the address stored in a pointer any time.
Yeah, but here there is a catch. We can only do that unless our pointer is not a const pointer, but we will talk about const pointers later.
It's also very important to avoid cross-assign between pointers of different types. It will give us a compiler error.

Okay, now you can ask how to get the value of a variable where our pointer points to. Yes, this is really easy. Just use \*.
It's called dereferencing a pointer.

```cpp

  // Initializing pointers and assigning them data
  // We know that pointers store addresses of variables

  int intNumber{43};
  int *pIntNumber{&intNumber}; // The address of operator (&)

  std::cout << "Int number : " << intNumber << std::endl; // 43
  std::cout << "pIntNumber (Address in memory) : " << pIntNumber << std::endl; // Address

  // You can also change the address stored in a pointer any time
  int intNumber1{65};
  pIntNumber = &intNumber; // Assign a different address to the pointer
  std::cout << "pIntNumber (with different address) :" << pIntNumber << std::endl; // Different address

  // Can't cross assign between pointers of different types
  int *pIntNumber1{nullptr};
  double doubleNumber{33.1};
  // pIntNumber = &doubleNumber; // compiler error

  // Dereferencing a pointer :
  int *pIntNumber2{nullptr};
  int intNumber2{56};
  pIntNumber2 = &intNumber2;

  std::cout << "value : " << *pIntNumber2 << std::endl; // Dereferencing a pointer : we should print 56

```

#### Side topic - Declaration and Initialization / Narrowing conversions.

There is one thing that I think can be confusing, especially for beginners, and that is the syntax for declaration and initialization.

In C++, variable declaration and initialization are two separate steps that can be combined using bracket initialization or assignment.
Variable declaration is the process of introducing a new variable to the program. It involves specifying the name and data type of the variable. For example:

```cpp
  double doubleNumber; // variable declaration
```

Initialization, on the other hand, is the act of assigning an initial value to the variable. It provides an initial value for a declared variable.
In C++, you have multiple ways to initialize variables. One way is using bracket initialization (also known as uniform or list initialization) using curly braces **{}**:

```cpp
double doubleNumber{33.1};  // bracket initialization
```

This approach is considered safer because it prevents narrowing conversions and ensures that variables are always initialized with intended values. However, it requires C++11 or later.
Another way to initialize variables is by using assignment operator **=**:

```cpp
double doubleNumber = 33.1;  // assignment initialization
```

This is the traditional way of initializing variables and works in all versions of C++. The assignment operator assigns the value on the right side of the equal sign to the variable on the left side.

Now, when to use which approach?

##### Bracket initialization is preferred when you have a specific value to initialize the variable with. It ensures that the variable is properly initialized and prevents accidental narrowing conversions. It is also useful when dealing with complex data types such as arrays or objects.

##### Assignment initialization is useful when you want to assign a value to a variable at some later point in the program, or if you have a dynamic initial value that may change during runtime.

In general, it is good practice to always initialize variables with an initial value to avoid potential bugs and undefined behavior. So, it is recommended to use bracket initialization (if supported) or assignment initialization based on your specific requirements and the available programming language features.

---

###### Narrowing conversions refer to the process of converting a value to a smaller data type in a way that may result in loss of data or precision. In simpler terms, when you perform a narrowing conversion, you are trying to fit a larger value into a smaller data type, which may lead to data loss or unexpected behavior. For example, converting a floating-point number to an integer type can result in truncation of the decimal part, leading to loss of precision. Narrowing conversions are generally considered unsafe because they can lead to unintended consequences and potentially introduce bugs in your code. It is recommended to use explicit conversions or perform range checks to ensure that the conversion is valid and no loss of information occurs.

---

## 3. Declaring pointers to char.

We can use pointers to char in the same way as we do for double, int, and other data types.
In the example below, we can also observe that we can reassign the address where our pointer will point to.

```cpp
  char *pChar{nullptr}; // Declare and initialize pointer with nullptr
  char charVar{'G'}; // Declare and initialize char variable with 'G'

  pChar = &charVar; // assign the address to that char variable
  std::cout << "The value stored in pChar is the first initial letter of my first name : " << *pChar << std::endl; // A

  char charVar1{'W'}; // Declare and initialize char variable with 'W'
  pChar = &charVar1;
  std::cout << "The value stored in pChar is the first initial letter of my last name: " << *pChar << std::endl; // G

```

With character pointers, we can do something really special: we can initialize them with a string literal, also known as a C-String. If we enclose our character string with double quotes, this string will be expanded into a character array of **const** char, and our pointer will be set to point to the first character of the array. It's important to understand that a C-String is a characters array, and by pointing to the character at index 0, we are referring to the first character of that array.

#### It's crucial to avoid using regular pointers to C-String and instead mark them as const char pointers. This way, we can avoid really bad situations where we try to modify a char array that is const, which will result in failure. So, to make the long story short, always remember to mark your pointers to C-String as const char pointers to prevent such issues.

On the other hand, when we want to let user of our program or other developers, to be able to modify char array we should declare and initialize a regular, pure character array. Regular character arrays can be modified as they are not marked as const.

```cpp
  //  we should avoid this at all cost, because it can result in failure when we try to modify char array
  // char *pMessage {"Greg Wolfinger"};

  // insted mark it as const char pointer
  const char *pMessage{"Greg Wolfinger"};
  std::cout << "message : " << pMessage << std::endl; // Greg Wolfinger
  // *pMessage = "C" ; // Compiler error
  std::cout << "*message : " << *pMessage << std::endl; // G

  //  Allow users to modify the string
  char message1[]{"Greg Wolfinger"};
  message1[5] = 'G';
  std::cout << "message1 : " << message1 << std::endl; // Greg Golfinger

```

---

###### Here are some additional crucial points to consider when using regular character arrays:

1. Regular character arrays do not have the same level of safety as const char pointers. Modifying a regular character array can introduce potential bugs if not handled carefully.
2. It is important to ensure the array has enough space allocated to handle modifications. If the array is not large enough, attempting to modify it can lead to buffer overflows and undefined behavior.
3. When modifying a regular character array, be vigilant about properly terminating the string with a null character ('\0') to ensure correct string handling.
4. If you want to provide a way for users or other developers to modify a char array without making it a const char pointer, consider providing appropriate functions or interfaces that handle the modifications safely and ensure data integrity.

---

## 4. Practice #1 - Pointers.

Let's build a program that tells random jokes to the user. The program will use a 2-dimensional character array to store a list of jokes. Each joke is represented as a C-string with a fixed length. The user is prompted to enter their nickname, and then the program generates a random number to select a joke from the list. The selected joke is displayed to the user, and they are given the option to hear another joke or end the program.
We can display additional information of how many jokes' user heard.

```cpp
#include <iostream>
#include <ctime>
int main()
{
  // srand() has to run once per program run
  std::srand(std::time(0)); // Seed

  // # Method 1
  // Initialize a 2-dimensional character array called 'jokes' to store a list of jokes.
  // Each joke is represented as a C-string with a fixed length of 100 characters.
  // As a result, we are allocating more memory than necessary for some jokes and not having
  // enough space for strings that are longer than 100.
  // This inefficient allocation of memory can be improved.
  char jokes[][100]{
      "Why are Assembly programmers always soaking wet? They work below C-level.",
      "Why do Java programmers have to wear glasses? Because they don’t C#.",
      "A programmer had a problem. He decided to use Java. He now has a ProblemFactory.",
      "An SQL query goes into a bar, walks up to two tables, and asks, “Can I join you?”",
      "What’s the object-oriented way to become wealthy? Inheritance.",
      "To understand what recursion is, you must first understand recursion.",
      "Returning with 10 butters, the programmer says, “They had eggs.”",
      "UNIX is user friendly. It’s just very particular about who its friends are.",
      "I don’t see women as objects. I consider each to be in a class of her own.",
      "How do you change a light bulb in concurrent programming?",
      "Chuck Norris writes code that optimizes itself.",
      "A foo walks into a bar, takes a look around and says “Hello World!”"};

  bool end{false};         // boolean to control the game
  int counter{0};          // counter variable set to 0
  const int maxLength{15}; // declares a const variable with a value of 15
  char name[maxLength]{};  // declares an empty character array `name` with a size of `maxLength`

  std::cout << "What's your nickname :" << std::endl; // John Doe :)
  std::cin.getline(name, maxLength);                  // Get input with spaces

  while (!end)
  {
    std::cout << "Your nickname is " << name << ", you are a funny person\n";

    size_t randNum = static_cast<size_t>((std::rand() % std::size(jokes))); // generate random number

    std::cout << jokes[randNum] << std::endl; // show the random joke
    counter++;
    std::cout << "Do you want to hear another joke ? (Y | N) : ";

    char continueGame;
    std::cin >> continueGame;

    end = ((continueGame == 'Y') || (continueGame == 'y')) ? false : true;
  }
  std::cout << "Your heard: " << counter << " jokes\n";

  return 0;
}
```

As you can see, this is a very basic program that has its limitations. To be more precise, memory allocation can be improved, and more can be achieved. So, this is the first time, where we can use pointers and witness how truly awesome they are and the extent to which we can accomplish more with them. We just need to make one change in our program. Instead of a regular character array, we can declare and initialize an array of constant char pointers and store our data in there. If the string is really large, it's not a problem as we can fit it into the memory. We are going to use the memory we need. If we need 30 characters, that's what it's going to be. We are not going to waste memory, but we're also not going to limit people to using only 100 characters like we do in method #1.

```cpp
  // Method #2
  // declare and initialize an array of const char pointer
  // fill array with set of new jokes
 const char *jokes[]{
      "Ada : You aim at your foot and pull the trigger, but the safety stops the gun from firing. The safety won’t budge until you tag your foot with a sign reading “”Bullet Hole in this foot””, and call the paramedics. You do so, then shoot yourself in the foot.",
      "C : The gun comes in 38 pieces, with a set of assembly instructions. After painstakingly assembling the pieces, you pull the trigger and the gun promptly backfires and blows your head off.",
      "Assembly : The same as C, except you have to hand-machine all the pieces as well. When you pull the trigger, your whole house explodes.",
      "Java : You break into someone else’s home and steal their water pistol. You then make a child gun that uses .38 rounds instead of water. When you pull the trigger on the child gun, nothing happens to you, but everyone who visits your house gets shot in the foot.",
      "Basic : You aim the gun at a straight horizontal and pull the trigger, which causes a stream of water to be squirted straight down onto your foot.",
      "Perl : You aim the gun at your foot and pull the trigger. There is no explosion, but gravity causes the bullet to slide out of the barrel and bounce off your foot.",
      "Lisp : You do a small part of the remaining work involved in shooting yourself in the foot. You then call yourself, and tell yourself to shoot yourself in the foot.",
      "Pascal : The same as Ada, except when you pull the trigger a little sign pops out reading “”BANG!””.",
      "C++ : The same as Java, except you try to build the parent water pistol using the gun tools from the C gun. When you pull the trigger on the child gun, the parent C gun explodes, spraying water everywhere, including the chamber of the child gun. This causes the child gun to backfire, blowing your head off.",
      "Visual C++ : The same as C++, except that the bullets, the gun parts, the tools you use to put it together, the hospital you get taken to afterwards, and the ambulance that takes you there are all owned by the same company.",
      "APL : Whenever you pull the trigger, no matter where you aim the gun, the bullet ricochets off of 13 objects and lodges in your foot. The gun has been examined by ballistics experts, mechanical engineers, and even the person who made it, and none of them can figure out how it works.",
      "FORTRAN : When you aim the gun at your foot and pull the trigger, a table indexing error causes the gun to shoot its firing pin into your foot instead of the bullet.",
  };
```

You can check both solutions and compare them. I'm sure you will be impressed! Now, let me clarify why we use two different types of arrays and which one is more optimal.

First, we have the regular array called **jokes**. It is a two-dimensional array because each joke has a fixed length of 100 characters. So, we need a grid-like structure to store multiple jokes efficiently, with each joke occupying a set amount of space.

On the other hand, we have **const char \*jokes[]**. This is a one-dimensional array of pointers to const char. Each element in this array points to a C-string, which can have variable lengths. This allows for storing jokes of different lengths without wasting memory. By using pointers, we can store strings(jokes) of any length. The size of the pointer itself is fixed, but the size of the string it points to can vary.

## 5. const pointer and pointer to const.

I'm going to try to explain this, as simple as I can, and I hope you will understand it, and when you do, it's become really easy and simple.
Ok, so maybe lets move to our code and let see all examples.

```cpp
  // Pointer : Can modify the data and the pointer itself
  int *pNumber{nullptr};
  int number{100};
  pNumber = &number;
  std::cout << "Pointer and value pointed to : both modifiable : " << std::endl;
  std::cout << "pNumber :" << pNumber << std::endl;    // Address
  std::cout << "*pNumber : " << *pNumber << std::endl; // 100
  std::cout << "number : " << number << std::endl;     // 100

  // Change the pointed to value through pointer
  std::cout << "Modifying the value pointed to pNumber through the pointer : " << std::endl;
  *pNumber = 432;
  std::cout << "pNumber : " << pNumber << std::endl;    // Address
  std::cout << "*pNumber  : " << *pNumber << std::endl; // 432
  std::cout << "number : " << number << std::endl;      // 432

   // Change the pointer itself to make it point somewhere else
  int number1{56};
  pNumber = &number1;
  std::cout << "pNumber :" << pNumber << std::endl;     // Address
  std::cout << "*pNumber : " << *pNumber << std::endl;  // 56
  std::cout << "number : " << number << std::endl;      // 432
  std::cout << "number1 : " << number1 << std::endl;    // 56

  // Pointer to const
  // Pointer pointing to constant data : You can't modify the data through pointer

  std::cout << "Pointer is modifiable , pointed to value is constant : " << std::endl;
  const int number2{632}; // Although you can omit the const on number2 here and it is still
                    // going to compile, it is advised to be as explicit as possible in
                    // your code and put the const in front. Make your intents CLEAR.

  const int *pNumber2{&number2}; // Can't modify number2 through pNumber2

  std::cout << "pNumber2 :" << pNumber2 << std::endl;    // Address
  std::cout << "*pNumber2 : " << *pNumber2 << std::endl; // 632

  std::cout << "Modifying the value pointed to by pNumber2 through the pointer (Compile Error) : " << std::endl;
  *pNumber2 = 444; // Compiler error

  // Although we can't change what's pointed to by pNumber2,
  // we can still change where it's pointing

  std::cout << "Changing the address pointed to by pNumber2: " << std::endl;
  int number3{872};
  pNumber2 = &number3;

  std::cout << "pNumber2 :" << pNumber2 << std::endl;    // Address
  std::cout << "*pNumber2 : " << *pNumber2 << std::endl; // 872

  // const keyword applies to the variable name.
  int protectedVar{10};   // we can make it const to protect it if we want.Show this
                          // protectedVar is a pointer to const data, we can't
                          // modify the data through this pointer : regardless of
                          // whether the data itself is declared const or not.

  const int *pProtectedVar{&protectedVar};
  *pProtectedVar = 55; // Compiler error
  protectedVar = 66;
  std::cout << "protectedVar : " << protectedVar << std::endl;      // 66
  std::cout << "pProtectedVar : " << pProtectedVar << std::endl;    // Address
  std::cout << "*pProtectedVar : " << *pProtectedVar << std::endl;  // 66

  // You can't set up a modifiable pointer to const data though,
  // You'll get a compiler error :Invalid convertion from 'const type*' to 'type*'.
  const int someData{55};
  int *pSomeData {&someData}; // Compiler error.
  *pSomeData = 66;            // Compiler error.

  // Both pointer and pointed to value are constant
  const int number5{459};
  const int *const pNumber5{&number5};
  std::cout << "Pointer is constant, value pointed to is constant : " << std::endl;
  std::cout << "pNumber5 :" << pNumber5 << std::endl;    // Address
  std::cout << "*pNumber5 : " << *pNumber5 << std::endl; // 459

  // Can't modify the pointed to value through the pointer
  std::cout << "Changing value pointed to by pNumber5 through the pointer (Compile Error) " << std::endl;
  *pNumber5 = 222; // Error : Trying to assign to read only location

  // Can't change where the pointer is pointing to : The pointer is now itself constant
  std::cout << "Changing the pointer pNumber5 address itself (Compile Error) " << std::endl;
  int number6{333};
  pNumber5 = &number6;  // Error : Trying to assign to read only location

  // Pointer is constant (can't make it point anywere else)
  // but pointed to value can change
  std::cout << "Pointer is contant, pointed to value can change : " << std::endl;
  int number7{982};

  int *const pNumber7{&number7};

  std::cout << "pNumber7 :" << pNumber7 << std::endl;    // Address
  std::cout << "*pNumber7 : " << *pNumber7 << std::endl; // 982
  std::cout << "Changing value pointed to through pNumber7 pointer : " << std::endl;

  *pNumber7 = 456;
  std::cout << "The value pointed to by pNumber7 now is : " << *pNumber7 << std::endl; // 456

  int number8{2928};
  std::cout << "Changing the address where pNumber7 is pointing (Compile Error)." << std::endl;
  pNumber7 = &number8;  // compiler error

```

#### The best way to understand this is to go through the code and run some tests on your own so that you can use it as a reference later on.

---

- Non-const pointer to int: Pointer that can modify the integer value it points to.
- Pointer to const: Pointer that cannot modify the data it points to.
- const pointer to const data: Pointer that cannot modify the data it points to and cannot be modified to point to different data.
- const pointer to non-const data: Pointer that cannot modify the data it points to, but can be modified to point to different data.

###### General reference and syntax.

```cpp
int var1{33};
int var2{788};
int *pVar2 {&var1};             // Non const pointer to int
const int *pVar3 {&var1};       // Pointer to const
const int *const pVar4 {&var1}; // Const pointer to const data
int *const pNumber7 {&var2};    // Const pointer to non const data

// If const shows up on the left of * : the data is const
// If const show up on the right of * : the pointer is const
```

---

## 6. Array of const pointer to const char.

I just want to show quickly how we can prevent modifying an array of pointers to const char. It may sometimes be handy to fully understand how this works. Let's write an example below.

```cpp
  const char *const favoriteBooks[]{
      "Witcher",
      "Quo Vadis",
      "Mr Car",
  }; // declare and initialize array of const char pointer

  // Print out the favoriteBooks
  std::cout << "Printing out the favorite books : " << std::endl;
  // we using for range loop
  for (const char *book : favoriteBooks)
  {
    std::cout << book << std::endl;
  }

   *favoriteBooks[0] = 'K'; // if we try and modify something it will result in a compiler error.

  // Can swap for a new book though.
  const char *newBook{"The Lord of the Rings"};
  favoriteBooks[0] = newBook; // Right now we can make this swap, but if we don't want that to happen, we can mark
                              // const char * const favoriteBooks as const, which will result in a compiler error.
                              // We can't make pinters inside this array point to other locations.
  // Print out the favoriteBooks
  std::cout << "Printing out the favorite books : " << std::endl;
  for (const char *book : favoriteBooks)
  {
    std::cout << book << std::endl;
  }

```

In this scenario, we utilized a const pointer to const to effectively safeguard the integrity of the data contained within the pointer, while also ensuring that the pointer itself cannot be directed towards different locations. This flexibility allows you to adapt these techniques according to your specific application requirements.

## 7. Explore the relationship between pointers and arrays.

Out of those all topics related to pointers, this is my favorite one. It's a bigger topic that allows us to dive deeper into the intricacies of memory management and data manipulation. In C++, an array is essentially a pointer to the memory location where the first element of the array is stored. This means that you can use pointer arithmetic to navigate through the different elements of an array.

Moreover, pointers and arrays can be used interchangeably in many cases. You can pass arrays to functions using pointers, allowing the function to modify the original array directly. This concept is powerful because it enables efficient memory usage and avoids unnecessary duplication of large data structures.

However, it's crucial to understand the potential pitfalls of working with pointers and arrays. An incorrect manipulation of pointers or accessing elements outside the bounds of an array can lead to memory leaks, segmentation faults, or undefined behavior in your program. To make the most out of the relationship between pointers and arrays, it's important to grasp concepts such as pointer arithmetic, dynamic memory allocation, and the proper use of const pointers.

---

#### Pointers and arrays: Similarities

An important concept to understand about arrays is that they can be thought of as pointers, although they are not actual pointers. This means that we can treat an array as if it were a pointer to the first element in the array. We can store this address in a pointer variable and use it like a pointer. By dereferencing the pointer, we can access the first element in the array. Similarly, if we print out the value of the pointer, we will see the address of the first element, just like we would with a normal pointer. Furthermore, instead of using the dereferencing operator "\*", we can also use the angle bracket notation to access specific elements in the array.

```cpp
 // Declare and initialize an array of 10 integers
  int numbers[10]{11, 12, 13, 14, 15, 16, 17, 18, 19, 20};

  // Create a pointer variable that points to the address of the first element in the 'numbers' array
  int *pNum{numbers};

  // Print the address of the "numbers" array
  std::cout << "Address of 'numbers' array: " << numbers << std::endl;
  std::cout << "Address stored in 'pNum' pointer: " << pNum << std::endl;
  std::cout << "Address of 'numbers[0]': " << &numbers[0] << std::endl;

  // Print the values at the address
  std::cout << "Value when dereferencing 'numbers': " << *numbers << std::endl;
  std::cout << "Value of 'numbers[0]': " << numbers[0] << std::endl;
  std::cout << "Value when dereferencing 'pNum': " << *pNum << std::endl;
  std::cout << "Value of 'pNum[0]': " << pNum[0] << std::endl;
```

#### Pointers and arrays: Differences

This code snippet below illustrates the differences between arrays and pointers, emphasizing their contrasting assignment capabilities and the varying compatibility with the **std::size()** function.

```cpp
int number {21};
pNum = &number;

// Attempting to assign the address of a variable to an entire array will result in a compiler error.
// Arrays are a special type of pointer that represents the entire array, so you cannot change their value.
numbers = &number; // Error: incompatible types in assignment of 'int*' to 'int[10]'

// Print the value of the pointer, which is the address of the 'number' variable.
std::cout << "pNum: " << pNum << std::endl;

// The std::size() function does not work with raw pointers, so using it with 'scores' array is valid.
std::cout << "Size of 'scores' array: " << std::size(scores) << std::endl;

// However, using std::size() with the 'pNum' pointer will result in a compilation error.
std::cout << "Size of 'pNum': " << std::size(pNum) << std::endl; // Compilation error.

```

To summarize:

1. Arrays are special pointers that represent the entire array, and you cannot assign the address of a variable to an entire array.
2. Pointers store the address of a variable and can be printed to display the address they point to.
3. The **std::size()** function works with arrays but not with raw pointers.

## 8. Practice #2 - Pointers.

So, I have another exercise for you. This time, I will not be assisting you, as I want to show you that learning programming can also be fun. I have prepared a game challenge for you. From now on, I will give you exercises, and you will work on them independently.

I anticipate that you might ask where to find the solutions. Well, that's a great question. I actually have another tutorial on algorithms in C++, which might provide you with the solutions if you're lucky. Do you like this game? I bet you do.

So, now that you know the rules, let's proceed and move on to our assignment.

```cpp

#include <iostream>

int main()
/*
Finding the Maximum Element and its Address in an Integer Array
In this assignment, you will be tasked with finding the maximum element in a given integer array using C++.
You will need to write a program that determines the address where the maximum element resides in the array.
This will be achieved by storing the address in a specified variable using a pointer.
For example, given int data[] {11,2,52,53,9,13,5,7,12,11}
you code should figure out that 53 is the maximum value and store its address in a variable.
*/
{
  int data[]{181, 82, 22, 53, 19, 1, 51, 217, 12, 11}; // given integer array
  int *maxAddress; // pointer where you will store address of the largest value

  return 0;
}
```

Solution: [Practice #2 - Assignments Solutions](https://grzegorz-wolfinger-blog.vercel.app/posts/algorithms-intro)

## 9. Swapping Array Data

Before delving into Pointer Arithmetic, allow me to demonstrate a quick and effortless method of swapping data within an array using pointers.

```cpp
    int arr0[5]{1, 2, 3, 4, 5};
    int arr1[5]{6, 7, 8, 9, 10};
    int *pArr0{arr0};
    int *pArr1{arr1};
    int *pTemp{nullptr};

    // Swap the pointer values
    pTemp = pArr1;
    pArr1 = pArr0;
    pArr0 = pTemp;

    // Print arr0
    std::cout << "pArr0 : ";
    for (size_t i{}; i < std::size(arr0); ++i)
    {
        std::cout << pArr0[i] << " ";
    }
    std::cout << std::endl;
    // Print arr1
    std::cout << "pArr1 : ";
    for (size_t i{}; i < std::size(arr1); ++i)
    {
        std::cout << pArr1[i] << " ";
    }
```

Alternatively, the swapping of data can also be achieved using the regular array swapping approach: [Swapping data between two arrays in C++.](https://grzegorz-wolfinger-blog.vercel.app/posts/algorithms-intro)

---

Using pointers for swapping data is advantageous in terms of memory and time efficiency, as it avoids copying the entire array and allows for direct swapping. However, it is more complex and requires careful pointer management. The regular approach is simpler and ensures predictable behavior, but it consumes more memory and can be slower for large arrays. The choice depends on the program's requirements.

---

## 10. Pointer Arithmetic.

Pointer arithmetic is a vital concept in programming that allows us to perform mathematical operations on memory addresses using pointers. This technique empowers us to efficiently navigate and manipulate data structures, enabling tasks like accessing elements in an array, iterating through linked lists, and dynamically allocating memory. By harnessing pointer arithmetic, we can effectively manage and manipulate data, leading to enhanced performance and optimized memory utilization in our programs.

Let's now explore how we can utilize pointer arithmetic to navigate through data that is stored contiguously in memory, specifically in an integer array.
To accomplish this, we increment or decrement our pointer, depending on the desired direction of movement.
By incrementing/decrementing the pointer, it will move to the next/previous memory address based on the size of the data type that the pointer is pointing to.

```cpp
#include <iostream>

int main()
{
  int scores[10]{11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
  int *pScore{scores};
  // pScore points to scores[0] at the beginning

  std::cout << "Values in scores array (pScore pointer increment/decrement) : " << std::endl;
  std::cout << "Address : " << pScore << " value : " << *(pScore) << std::endl; // 11
  // Moves forward by sizeof(int) : 4 bytes
  ++pScore;
  // pScore now points to scores[1]

  std::cout << "Address : " << pScore << " value : " << *(pScore) << std::endl; // 12
  // Moves forward by sizeof(int) : 4 bytes
  ++pScore;
  // pScore now points to scores[2]

  std::cout << "Address : " << pScore << " value : " << *(pScore) << std::endl; // 13
  // Moves backward by sizeof(int) : 4 bytes
  --pScore;
  // pScore is back to pointing to scores[1]
  std::cout << "Address : " << pScore << " value : " << *(pScore) << std::endl; // 12

  // Print value at scores[2] without modifying the pointer
  std::cout << "Value at scores[2]: " << *(pScore + 2) << std::endl; // 14
  // pScore is still pointing to scores[1]

  // Reset the pointer to the start of the array
  // In general, resetting a pointer to the beginning of an array can be useful
  // in scenarios where the pointer has been moved to a different location within
  // the array and you want to perform operations starting from the beginning again.

  pScore = scores;
  // pScore points to scores[0]

  // Moves forward by 4 * sizeof(int)
  std::cout << "scores[4] : " << (pScore += 4) << std::endl;
  std::cout << "Address : " << pScore << " value : " << *(pScore) << std::endl;

  // Reset the pointer to the start of the array
  pScore = scores;
  // pScore points to scores[0]

  std::cout << "Pointer arithmetic and a for loop: " << std::endl;
  for (size_t i{0}; i < std::size(scores); i++)
  {

    std::cout << "Value : " << *(pScore + i) << std::endl; // scores[i]
    // Can also do arithmetic on the array name just like any pointer.
    std::cout << "Value : " << *(scores + i) << std::endl;
  }

  // Print in reverse order
  std::cout << "Elements in reverse order: " << std::endl;
  // Set pScore to point to the last element in the array
  pScore = scores + std::size(scores) - 1;

  // Iterate over the array in reverse order
  for (size_t i{std::size(scores)}; i > 0; i--)
  {
    // -- arithmetic on the pScore pointer
    std::cout << "Value : " << *(pScore--) << std::endl;
    // with decrementing pointer arithmetic
    std::cout << "Value : " << *(scores + i - 1) << std::endl;
    // with array index notation
    std::cout << "Value : " << scores[i - 1] << std::endl;
  }

  // WARNING!! This is an out-of-bounds access and can cause undefined behavior.
  // pScore points to out-of-bounds
  std::cout << "Address : " << pScore << " value : " << *(pScore) << std::endl;

  // Reset the pointer to the start of the array
  pScore = scores;
  // pScore points to scores[0]

  scores[0] = 31;     // Array index notation
  *(scores + 1) = 32; // Equivalent to scores[1] = 32; Pointer arithmetic on array name
  *(pScore + 2) = 33; // Equivalent to scores[2] = 33; Pointer arithmetic on pScore pointer

  std::cout << "Printing out the array after modification of 3 first elements: " << std::endl;
  for (size_t i{0}; i < std::size(scores); ++i)
  {
    std::cout << "Value : " << scores[i] << std::endl;
  }
  return 0;
}
```

## 11. Practice #3 - Pointers.

So, I have another exercise for you. This time, let's use pointer arithmetic. That should be easy, right?
Let's proceed and move on to our assignment.

```cpp

#include <iostream>

/*
Shoot forward
You are given an array of 10 integers elements and an offset value of type
unsigned int.Your job is to figure out which element we would hit if we went
offset slots from the beginning of the array.
For example if your input array is :

int data[] {41,13,63,3,19,31,15,17,24,11};

and your offset is 8, then your code should print the message exactly as shown below :

The element 8 slots away from the beginning is : 24
It is recommended to use pointer arithmetic to figure this out.
*/
int main()
{
  int data[]{1, 3, 6, 3, 9, 3, 5, 7, 2, 11};  // given integer array
  unsigned int offset = 4; // given an offset

  return 0;
}
```

Solution: [Practice #3 - Assignments Solutions](https://grzegorz-wolfinger-blog.vercel.app/posts/algorithms-intro)

## 12. Pointer Arithmetic: Distance between elements.

When working with pointer arithmetic, it is crucial to understand the distances between elements. The distance is measured based on the data type of the pointer and determines how much the memory address needs to be incremented or decremented to access the desired element.

If we subtract two pointers and those happen to be from the same array or contiguous memory locations for the same type, the result is going to be
an integer and that integer is going to be representing the distance between two elements.

```cpp

int main()
{
  int scores[10]{11, 12, 13, 14, 15, 16, 17, 18, 19, 20};

  // Array index notation
  // int * pointer1 {&scores[0]};
  // int * pointer2 {&scores[8]};

  // Pointer arithmetic notation
  int *pointer1{scores + 0};
  int *pointer2{scores + 8};

  // Calculate the distance between pointers
  std::cout << "pointer2 - pointer1 : " << pointer2 - pointer1 << std::endl; // 8 of size `int`
  std::cout << "pointer1 - pointer2 : " << pointer1 - pointer2 << std::endl; // -8 of size `int`

  // std::ptrdiff_t it's a special type to store pointer differences.
  std::ptrdiff_t pos_diff = pointer2 - pointer1;
  std::ptrdiff_t neg_diff = pointer1 - pointer2;

  // Print the differences between pointers
  std::cout << "pointer2 - pointer1 : " << pos_diff << std::endl; // 8 of size `int`.
  std::cout << "pointer1 - pointer2 : " << neg_diff << std::endl; // -8
  std::cout << "sizeof(std::ptrdiff_t) : " << sizeof(std::ptrdiff_t) << std::endl;

  return 0;
}
```

In the provided code example, the distances between elements were found to be 8 (the size of the **int** data type) using pointer arithmetic. This means that to move from one element to the next, the memory address needs to be increased or decreased by 8 positions.

It's worth noting that pointer arithmetic can also yield negative distances. In the code, the result of -8 indicates that **pointer1** is 8 positions to the left of **pointer2** in the array.

Understanding distances between pointers is essential for efficient memory access and optimizing program performance. It is particularly beneficial when manipulating arrays, iterating through data structures, and implementing algorithms that rely on pointer arithmetic.

---

###### **std::ptrdiff_t** is a special, signed integer type in C++ that is specifically designed to store the difference between two pointers.

---

## 13. Practice #4 - Pointers.

```cpp
#include <iostream>
/*
Find the address of the smallest element.
You are given an array of integers and your job is to figure out the address of the smallest element.
For example, given:

int data[] {11,2,52,53,9,13,5,7,12,11}

as the input, 2 is our smallest element and we should store his memory address in a pre-declared variable, minAddress.
Please know that for this exercise you should use pointer arithmetic notation and it's not allowed
to go through array index notation like data[1] or data[i] to access stuff.
*/
int main()
{
  int data[]{11, 2, 52, 53, 9, 13, 5, 7, 12, 11};
  // initialize pointer to the first element of the array, 'data'
  int *minAddress{data};


  return 0;
}

```

Solution: [Practice #4 - Assignments Solutions](https://grzegorz-wolfinger-blog.vercel.app/posts/algorithms-intro)

## 14. Pointer Arithmetic: Comparing Pointers.

Pointer arithmetic is a feature in programming languages that allows you to perform mathematical operations on pointers.
When comparing pointers using logical operators such as ">, <, >=, <=, ==, !=", the comparison is made based on the memory addresses stored in the pointers. This enables you to determine the relative positioning of different memory locations in terms of their addresses.

By understanding and applying pointer arithmetic, we can gain a deeper comprehension of how to compare and manipulate memory addresses, enhancing their programming skills and problem-solving capabilities. Let's see some code where we can see all the comparisons:

```cpp
  int scores[10]{11, 12, 13, 14, 15, 16, 17, 18, 19, 20};

  // Pointer arithmetic notation
  int *pointer1{scores};
  int *pointer2{scores + 8};

  // Prints out the comparison results between pointer1 and pointer2
  std::cout << "Comparing pointers : " << pointer1 << " - " << pointer2 << std::boolalpha << std::endl;

  // Compares whether pointer1 is greater than pointer2 and prints the result
  std::cout << "pointer1 > pointer2 : " << (pointer1 > pointer2) << std::endl;

  // Compares whether pointer1 is less than pointer2 and prints the result
  std::cout << "pointer1 < pointer2 : " << (pointer1 < pointer2) << std::endl;

  // Compares whether pointer1 is greater than or equal to pointer2 and prints the result
  std::cout << "pointer1 >= pointer2 : " << (pointer1 >= pointer2) << std::endl;

  // Compares whether pointer1 is less than or equal to pointer2 and prints the result
  std::cout << "pointer1 <= pointer2: " << (pointer1 <= pointer2) << std::endl;

  // Compares whether pointer1 is equal to pointer2 and prints the result
  std::cout << "pointer1 == pointer2 : " << (pointer1 == pointer2) << std::endl;

  // Compares whether pointer1 is not equal to pointer2 and prints the result
  std::cout << "pointer1 != pointer2 : " << (pointer1 != pointer2) << std::endl;

```

**The further you go in the array, the bigger the address.**

In an array, the elements are stored in contiguous memory locations, meaning they are sequentially placed in memory. When we declare an array like _int scores[10]{11, 12, 13, 14, 15, 16, 17, 18, 19, 20};_, the elements 11, 12, 13, and so on are stored in adjacent memory addresses.

So, by going further in the array means that as we move towards higher index values in the array, the memory addresses of the elements also increase. In other words, if we compare the memory addresses of two pointers pointing to elements in the array, the pointer pointing to the element with a higher index value will have a larger memory address than the pointer pointing to the element with a lower index value.

For example, in the given code snippet, **pointer1** points to the first element **11** (index 0) and **pointer2** points to the element **19** (index 8). Since **pointer2** points to an element further into the array compared to **pointer1**, the memory address of **pointer2** is greater than the memory address of **pointer1**. This is because as we traverse the array from index 0 to index 8, the memory addresses of the elements increase.

#### Swapping data between two arrays - Possible uses of Pointer Arithmetic

Solution: [C++ Simple algorithms](https://grzegorz-wolfinger-blog.vercel.app/posts/algorithms-intro)

## 15. Dynamic Memory Allocation.

Dynamic memory allocation in C++ is the ability to allocate memory during program execution. In contrast to the stack, which is used for storing local variables, function calls, etc..., dynamic memory allocation utilizes the heap. The heap is a region of memory provided by the operating system within the program's memory map.

In C++, the **new** operator is used to dynamically allocate memory and returns a pointer to the allocated memory. This allows for the creation of variables and data structures whose size can change dynamically based on the program's needs. The dynamically allocated memory remains allocated until it is explicitly deallocated using **delete** operator, which frees up the memory for reuse.

Dynamic memory allocation is particularly useful in situations where the size of data is not known in advance, or when memory needs to be allocated and deallocated based on specific conditions or requirements. It offers flexibility and allows for efficient utilization of memory resources.

It is crucial to manage dynamic memory correctly. Failing to deallocate memory can result in memory leaks, which can degrade performance and cause excessive memory consumption. It is also important to avoid accessing deallocated memory, as this can lead to undefined behavior or crashes.

---

So far, we've only been using memory allocated on the stack. We are going to see how one can allocate memory from the heap and discuss some differences between these mechanisms.

##### Stack

- Memory is finite.
- The developer isn't in full control of the memory lifetime.
- Lifetime is controlled by the scope mechanism.

##### Heap

- Memory is finite.
- The developer is in full control of when memory is allocated and when it's released.
- Lifetime is controlled explicitly through **new** and **delete** operators.

Let's see now, how we can initialize the pointer with dynamic memory. Dynamically allocate memory at run time and make a pointer point to it.

```cpp
  // This syntax indicates that `pNumber` is a pointer to an integer (int).
  int *pNumber{nullptr};
  /*
    To dynamically allocate space for a single int on the heap, we utilize the
              `new` keyword.
    This allocated memory becomes the property of our program, preventing the system
    from utilizing it for other purposes until we release it. Upon execution of
    this line, a valid memory location is created, with a size that can
    accommodate the data type pointed to by the pointer.
  */
  pNumber = new int;

  // Writting into dynamically allocated memory
  *pNumber = 77;
  std::cout << "Dynamically allocating memory : " << std::endl;
  std::cout << "*pNumber : " << *pNumber << std::endl; // 77

  // This deallocates the memory pointed to by pNumber,
  // making it available for the operating system to reuse.
  delete pNumber;
  /*
   Setting a pointer to nullptr after releasing memory to the OS is crucial
   for preventing dangling pointers, enhancing code readability,
   promoting sound memory management practices, and detecting potential memory leaks.
   This simple practice safeguards your code from unpredictable behavior
   and ensures efficient memory utilization.
  */
  pNumber = nullptr;

  // It is also possible to initialize the pointer with a valid
  // address up on declaration. Not with a nullptr

  // This initializes the pointer `pNumber2` with the address of dynamically
  // allocated memory. The value at this memory location is indeterminate.
  int *pNumber2{new int};

  // This initializes the pointer `pNumber3` with the address of dynamically allocated
  // memory and explicitly initializes the value at that location to 22.
  int *pNumber3{new int(22)};

  // This initializes the pointer `pNumber4` with the address of dynamically allocated
  // memory and initializes the value at that location to 23 using uniform initialization.
  int *pNumber4{new int{23}};

  std::cout << std::endl;
  std::cout << "Initialize with valid memory address at declaration : " << std::endl;
  std::cout << "pNumber2 : " << pNumber2 << std::endl;   // some address
  std::cout << "*pNumber2 : " << *pNumber2 << std::endl; // junk value

  std::cout << "pNumber3 : " << pNumber3 << std::endl;   // address
  std::cout << "*pNumber3 : " << *pNumber3 << std::endl; // 22

  std::cout << "pNumber4 : " << pNumber4 << std::endl;   // address
  std::cout << "*pNumber4 : " << *pNumber4 << std::endl; // 23

  // Remember to release the memory to the OS
  delete pNumber2;
  pNumber2 = nullptr;

  delete pNumber3;
  pNumber3 = nullptr;

  delete pNumber4;
  pNumber4 = nullptr;

  //  After deallocating `pNumber2`, the pointer is reused to point
  // to newly allocated memory, storing the value 81.
  pNumber2 = new int(81);
  std::cout << "*p_number : " << *pNumber2 << std::endl; // 81

  delete pNumber2;
  pNumber2 = nullptr;

  /*
   Avoid deleting a pointer twice. Deleting a pointer once releases the associated memory.
   Deleting it again is undefined behavior, potentially leading to crashes or data corruption.
  */

  pNumber2 = new int(99);
  std::cout << "*pNumber2 : " << *pNumber2 << std::endl;

  // delete pNumber2; // avoid doing that

  std::cout << "Program is ending well" << std::endl;

```

As you can see, dynamic memory allocation and effective utilization of heap memory are crucial skills for developers. This was just an introduction, and we will delve deeper into dynamic memory allocation when we discuss dynamically allocated arrays. For now, let's shift our focus to dangling pointers to emphasize the importance of thoroughly grasping these concepts.

## 16. Dangling Pointers.

In C++, a dangling pointer occurs when a pointer points to a memory location that has been deallocated or goes out of scope. This means the pointer no longer points to valid memory, and attempting to dereference it can lead to undefined behavior or crashes.
Without further delay, let's examine some code examples.

```cpp
#include <iostream>

int main()
{
  /*
  Case 1: Uninitialized pointer: This case demonstrates the issue of using
  an uninitialized pointer. The `pNumber` pointer is declared but not
  initialized, meaning it points to an unknown memory location. Attempting
  to dereference this pointer (using `*pNumber`) will result in undefined behavior,
  potentially leading to a crash.
  */
  int *pNumber; // Dangling uninitialized pointer

  std::cout << "Case 1 : Uninitialized pointer : ." << std::endl;
  std::cout << "pNumber : " << pNumber << std::endl;
  // std::cout << "*pNumber : " << *pNumber << std::endl; // CRASH!

  /*
  Case 2: Deleted pointer: This case illustrates the danger of using a pointer
  after the memory it points to has been deleted. The `pNumber1` pointer is allocated
  memory using new int{67}, and the value is accessed using `*pNumber1`.
  Then, the memory is deallocated using `delete pNumber1`. However, attempting to access
  the value again using *pNumber1 will result in undefined behavior, as the pointer
  points to invalid memory.
  */
  std::cout << "Case 2 : Deleted pointer" << std::endl;
  int *pNumber1{new int{67}};

  std::cout << "*pNumber1 (before delete) : " << *pNumber1 << std::endl;

  delete pNumber1;
  std::cout << "*pNumber1(after delete) : " << *pNumber1 << std::endl;

  /*
  Case 3: Multiple pointers to the same address: This case demonstrates the issue of
  having multiple pointers pointing to the same memory location. Both `pNumber2` and
  `pNumber3` point to the same memory block allocated using new int{83}.
  Deleting the memory using `delete pNumber2` invalidates both pointers.
  Attempting to access the value using `*pNumber3` after deleting `pNumber2` will result
  in undefined behavior.
  */
  std::cout << "Case 3 : Multiple pointers pointing to same address : " << std::endl;

  int *pNumber2{new int{83}};
  int *pNumber3{pNumber2};

  std::cout << "pNumber2 - " << pNumber2 << " - " << *pNumber2 << std::endl;
  std::cout << "pNumber3 - " << pNumber3 << " - " << *pNumber3 << std::endl;

  // Deleting pNumber2
  delete pNumber2;

  // pNumber3 points to deleted memory. Dereferncing it will lead to
  // undefined behaviour : Crash / garbage
  std::cout << "pNumber3(after deleting pNumber2) - " << pNumber3 << " - " << *pNumber3 << std::endl;

  /*
  Solution 1: Initialize pointers immediately: This solution involves initializing pointers
  to nullptr immediately after declaration. This ensures that the pointers don't point
  to invalid memory locations before being properly initialized.
  */
  std::cout << "Solution 1 : " << std::endl;
  int *pNumber4{nullptr};     // Initialize to null pointer
  int *pNumber5{new int(87)}; // Allocate memory and initialize

  // Check for nullptr before use
  if (pNumber5 != nullptr)
  {
    std::cout << "*pNumber5 : " << *pNumber5 << std::endl;
  }
  else
  {
    std::cout << "Invalid address" << std::endl;
  }
  /*
    Solution 2:
    After deleting a pointer, reset it to nullptr to clearly indicate
    that it no longer points to any valid memory location.
  */
  std::cout << "Solution 2 : " << std::endl;
  int *pNumber6{new int{82}}; // Allocate memory and initialize

  // Use the pointer however you want
  std::cout << "pNumber6 - " << pNumber6 << " - " << *pNumber6 << std::endl;

  delete pNumber6;    // Deallocate
  pNumber6 = nullptr; // Reset the pointer

  // Check for nullptr before use
  if (pNumber6 != nullptr)
  {
    std::cout << "*pNumber6 : " << *pNumber6 << std::endl;
  }
  else
  {
    std::cout << "Invalid memory access!" << std::endl;
  }

  /*
   Solution 3
   For multiple pointers pointing to the same address,
   ensure there is one clear pointer (master pointer)
   that owns the memory (responsible for releasing it when necessary).
   Other pointers should only be able to dereference
   when the master pointer is valid.
  */

  std::cout << "Solution 3 : " << std::endl;
  int *pNumber7{new int{382}}; // Let's say pNumber8 is the master pointer
  int *pNumber8{pNumber7};

  // Dereference the pointers and use them
  std::cout << "pNumber7 - " << pNumber7 << " - " << *pNumber7 << std::endl;

  if (pNumber7 != nullptr)
  { // Only use slave pointers when master pointer is valid
    std::cout << "pNumber8 - " << pNumber8 << " - " << *pNumber8 << std::endl;
  }

  delete pNumber7; // Master releases the memory
  pNumber7 = nullptr;

  if (pNumber7 != nullptr)
  { // Only use slave pointers when master pointer is valid
    std::cout << "pNumber8 - " << pNumber8 << " - " << *pNumber8 << std::endl;
  }
  else
  {
    std::cerr << "WARNING : Trying to use an invalid pointer" << std::endl;
  }

  // We ensure that our program runs to the end and this statement is executed.
  std::cout << "Program is ending well" << std::endl;

  return 0;
}
```

## 17. When the **new** operator fails.

In rare instances, the **new** operator may fail to allocate dynamic memory from the heap. If this occurs and no mechanism exists to handle the failure, an exception will be thrown, causing your program to crash. Depending on the nature of your application, failed memory allocations can have severe consequences, necessitating thorough checking and handling procedures. Fortunately, we have tools like the **try-catch** block and the **std::nothrow** keyword to protect against such exceptions.

```cpp
#include <iostream>

int main()
{
   /*
  The initial memory allocation attempt for 10000000000000000 integers is
  intentionally set to fail. This demonstrates the likelihood of failure
  when requesting an extremely large amount of memory.
  */
  // int *data = new int[10000000000000000]; // will cause exception

  // Instead, we could check the requested memory size against a reasonable limit and handle the allocation accordingly.
  size_t memorySize = 10000;
  if (memorySize > UINT_MAX)
  {
    std::cout << "Requested memory size is too large" << std::endl;
    return 1;
  }
  /*
  the try-catch block is specifically designed to handle std::bad_alloc exceptions, which
  are thrown when memory allocation fails. It also emphasizes that the std::bad_alloc &ex
  parameter captures the exception object, allowing access to its what() member function to
  retrieve the error message.
  */
  // Allocate memory using try-catch block
  try
  {
    // Allocate memory for an array of memorySize integers using the new[] operator
    int *data = new int[memorySize];

    // Use the allocated memory
    for (size_t i = 0; i < 100; ++i)
    {
      *(data + i) = i;
      std::cout << *(data + i) << " ";
    }

    // Deallocate memory when no longer needed using the delete[] operator
    // It's important to properly deallocate memory when it's no longer
    // needed to prevent memory leaks.
    delete[] data;
    std::cout << std::endl;
  }
  // The try-catch block catches the std::bad_alloc exception and prints an error message.
  catch (const std::bad_alloc &ex)
  {
    std::cout << "Memory allocation failure: " << ex.what() << std::endl;

    // Handle the exception appropriately, e.g., retry with smaller size or terminate
    return 1;
  }

  /*
  The new (std::nothrow) expression explicitly indicates that memory allocation
  should not throw an exception upon failure. Instead, it returns a nullptr if
  the allocation is unsuccessful. This approach allows for more controlled
  handling of memory allocation failures.
  */

  for (size_t i{0}; i < 100; ++i)
  {

    int *data = new (std::nothrow) int[1000000000];

    /*
    The if (data != nullptr) check effectively evaluates whether the memory
    allocation using new (std::nothrow) was successful. If data is nullptr,
    it indicates a failure, and an appropriate message is printed.
    */
    if (data != nullptr)
    {
      std::cout << "Data allocated" << std::endl;
    }
    else
    {
      std::cout << "Data allocation failed" << std::endl;
    }
  }

  std::cout << "Program ending well" << std::endl;

  return 0;
}
```

## 17. Null Pointer Safety in C++.

Null pointer dereferencing is a common programming error that can lead to crashes, undefined behavior, and security vulnerabilities. C++ offers several approaches to prevent or detect null pointer dereferencing errors, including:

1. Explicit Null Checks: Manually check every pointer for null before dereferencing.
2. Smart Pointers: Utilize smart pointers like **std::unique_ptr**, **std::shared_ptr**, and **std::weak_ptr** to manage object lifetimes and prevent null pointer dereferencing.
3. RAII (Resource Acquisition Is Initialization): Employ RAII to acquire resources upon object creation and release them upon destruction, ensuring proper resource management.
4. Compiler Warnings and Static Analysis: Leverage compiler warnings and static analysis tools to identify potential null pointer dereferencing errors early in the development process.

By adopting these strategies, we can enhance the safety and reliability of their C++ code.

For the sake of this tutorial, I will briefly introduce some of them, such as Explicit Null Check and Smart Pointers. In general, Smart pointers are a more modern and safer approach to pointer management in C++. They automatically manage the lifetime of the objects they point to and prevent null pointer dereferencing by checking for null before dereferencing. We will definitely discuss Smart Pointers in more detail in a future article.

#### Explicit Null Checks.

```cpp
  // Declare a pointer to an integer named 'pNumber' and initialize it to nullptr
  int *pNumber{nullptr};

  // Allocate memory for an integer value and assign it to 'pNumber'
  pNumber = new int(7);

  // Check if 'pNumber' points to a valid address
  if (pNumber)
  {
    // If 'pNumber' is valid, print the address and value of the pointed-to integer
    std::cout << "pNumber points to a VALID address : " << pNumber << std::endl;
    std::cout << "*pNumber : " << *pNumber << std::endl;
  }
  else
  {
    // If 'pNumber' is invalid, print an error message
    std::cout << "pNumber points to an INVALID address." << std::endl;
  }

  // Deallocate the memory pointed to by 'pNumber'
  delete pNumber;
  // Reset 'pNumber' to nullptr to avoid dangling pointers
  pNumber = nullptr;

  // Declare another pointer to an integer named 'pNumber1' and initialize it to nullptr
  int *pNumber1{nullptr};

  // Attempt to delete the memory pointed to by 'pNumber1', even though it's nullptr
  delete pNumber1; // This won't cause any problem if 'pNumber1' contains nullptr
```

#### Smart Pointers

You can use a smart pointer to manage the memory for you. This will automatically deallocate the memory when it is no longer needed, and you will not have to worry about manually calling delete. For example:

```cpp
#include <iostream>
#include <memory>

int main() {
  // Create a smart pointer to an integer and initialize it to 7
  std::unique_ptr<int> pNumber(new int(7));

  // Check if the smart pointer points to a valid address
  if (pNumber) {
    // If the smart pointer is valid, print the value of the pointed-to integer
    std::cout << "pNumber points to a VALID address: " << *pNumber << std::endl;
  } else {
    // If the smart pointer is invalid, print an error message
    std::cout << "pNumber points to an INVALID address." << std::endl;
  }

  // No need to manually delete the memory, as the smart pointer will handle it automatically
  // pNumber = nullptr;

  // Create another smart pointer to an integer and initialize it to nullptr
  std::unique_ptr<int> pNumber1(nullptr);

  /*
  This line is not strictly necessary, as the smart pointer `pNumber1` will automatically
  manage the memory deallocation when it goes out of scope. However, I included
  to demonstrate that deleting the memory pointed to by a smart pointer is still possible
  and safe.

  The get() method of a smart pointer returns the raw pointer that it manages. In this case,
  `pNumber1.get()` returns the raw pointer to the integer value that is being managed by
  `pNumber1`. Calling delete on this raw pointer will explicitly release the memory associated
  with the pointed-to integer.
  */
  delete pNumber1.get();

  return 0;
}
```

In this example, **std::unique_ptr** is used as the smart pointer type. It ensures that the memory allocated for the integer value is automatically released when the smart pointer goes out of scope. This eliminates the need for manual memory management and helps prevent memory leaks.

Smart pointers are a complex topic, so I will create a separate guide on them soon. Let's now move to another important topic related to pointers and dynamic memory allocation: memory leaks.

## 18. Memory Leaks.

A memory leak in C++ occurs when dynamically allocated memory is no longer accessible (Loss of access) to the program and cannot be reclaimed by the memory allocator (Unable to reclaim). We can go into more detailed explanation of that.

Loss of access occurs when a pointer to dynamically allocated memory is lost or invalidated. This can happen for a number of reasons, such as when a pointer goes out of scope, when a pointer is overwritten with a different value, or when an object is destroyed.

Unable to reclaim means that the memory allocator cannot reclaim the lost memory. This is because the allocator does not have a way to track down the lost pointers and deallocate the memory.

Memory leaks can be a serious problem in C++ programs because they can eventually cause the program to run out of memory. This can lead to crashes, performance slowdowns, and other unexpected behavior. That's why we always should use **delete** or **delete[]** operators to deallocate dynamically allocated memory.

Also use smart pointers, such as **std::unique_ptr** and **std::shared_ptr**, to manage memory automatically.

Finally, use memory debugging tools to detect and fix memory leaks.

---

```cpp
#include <iostream>

int main()
{
  // Allocate memory for an integer and store the address in pNumber
  int *pNumber = new int{67}; // Points to some address, let's call that address1

  // Create a local variable 'number' on the stack
  int number = 55; // variable that's allocated in stack memory

  /*
   Assign the address of 'number' to pNumber
   Now pNumber points to address2, but address1 is still in use by
   our program. But our program has lost access to that memory location.
  */
  pNumber = &number;
  // Memory has been leaked!!!.

  // Double allocation
  // Allocate memory for an integer and store the address in pNumber1
  int *pNumber1{new int{55}};

  // Use the pointer pNumber1 to access the allocated memory
  // ...

  // We should delete and reset here, but...

  // Now our pointer points to another address and we lost access to int{55}.
  pNumber1 = new int{44}; // memory with int{55} leaked!!!.

  // we deleting here where we don't have an access anymore
  // Delete the memory allocated to pNumber1 and reset the pointer to nullptr
  delete pNumber1;    // Free the memory pointed to by pNumber1
  pNumber1 = nullptr; // Reset the pointer to prevent dangling pointers

  // Nested scopes with dynamically allocated memory
  {
    int *pNumber2{new int{57}};

    // Use the dynamically allocated memory pointed to by pNumber2
    // ...
    // Delete the memory allocated to pNumber2 within the inner scope
    delete pNumber2; // Free the memory pointed to by pNumber2
    // if not then
  }
  // Memory with int{57} leaked !!!.

  std::cout << "Program ending well" << std::endl;
  return 0;
}
```

We'll undoubtedly revisit memory leaks in the future, so let's remember to prioritize smart pointers and familiarize ourselves with RAII principles.

---

#### Side-Topic: RAII Principles.

##### RAII stands for Resource Acquisition Is Initialization, a programming idiom commonly used in object-oriented programming languages, particularly in C++. It emphasizes that the acquisition of resources, such as memory, should be tightly coupled with the initialization of objects that manage those resources. This approach ensures that resources are properly released when the objects go out of scope, minimizing the risk of memory leaks and other resource management issues. The key principle of RAII is to encapsulate resource management within the object itself. When an object is created, it also acquires the necessary resources, such as dynamically allocated memory, file descriptors, or database connections. When the object goes out of scope and is destroyed, it automatically releases those resources, ensuring that they are no longer used by the program and can be reclaimed by the system.

##### RAII offers several advantages, including:

##### 1. Automatic Resource Management: RAII automates resource management tasks, reducing the burden on the programmer and preventing common errors like forgetting to release resources.

##### 2. Reduced Memory Leaks: By ensuring that resources are released when they are no longer needed, RAII helps to prevent memory leaks, which can lead to performance issues and crashes.

##### 3. Improved Code Readability: RAII makes code more readable and maintainable by encapsulating resource management within the object, making it clear how resources are acquired and released.

##### 4. Scoping and Lifetime Control: RAII aligns the lifetime of resources with the lifetime of the objects that manage them, ensuring that resources are released when they are no longer needed.

##### 5. Error Handling and Resource Cleanup: RAII simplifies error handling and resource cleanup by handling resource release even in exceptional situations, ensuring that resources are properly managed even in the face of errors.

---

## 19. Dynamically allocated arrays.

A dynamic array, also known as a vector, is a collection of elements that can be allocated and deallocated during runtime. Unlike traditional static arrays, which have a fixed size determined at compile time, dynamic arrays offer flexibility in their size and can be expanded or reduced as needed.

Key Characteristics of Dynamic Arrays:

##### 1. Dynamic Allocation: Dynamic arrays are allocated on the heap, a memory region that allows memory to be assigned and released during program execution.

##### 2. Flexible Size: The size of a dynamic array can be modified at runtime using operators like new and delete.

##### 3. Contiguous Memory: Elements of a dynamic array are stored in contiguous memory locations, enabling efficient access and manipulation.

```cpp
#include <iostream>

int main()
{
  const size_t size{10};

  // Different ways you can declare an array
  // dynamically and how they are initialized

  // `pSalaries` is an array of double values, and its elements will be initialized with garbage values.
  double *pSalaries{new double[size]};
  /*
  `pStudents` is an array of int values, and all its elements will be initialized to 0.
  The `std::nothrow` placement new is used to indicate that the allocation should not
  throw an exception if the memory allocation fails.
  */
  int *pStudents{new (std::nothrow) int[size]{}};

  /*
   Allocating memory space for an array of size double
   First 5 will be initialized with 1,2,3,4,5, and the rest will be 0's.
  */
  double *pScores{new (std::nothrow) double[size]{1, 2, 3, 4, 5}};

  // nullptr check and use the allocated array
  if (pScores)
  {
    std::cout << "size of scores (it's a regular pointer) : " << sizeof(pScores) << std::endl;
    std::cout << "Successfully allocated memory for scores." << std::endl;

    // Print out elements. Can use regular array access notation, or pointer arithmetic
    for (size_t i{}; i < size; ++i)
    {
      std::cout << "value : " << pScores[i] << " : " << *(pScores + i) << std::endl;
    }
  }

  // Deallocate the memory used by arrays
  delete[] pSalaries;
  pSalaries = nullptr;

  delete[] pStudents;
  pStudents = nullptr;

  delete[] pScores;
  pScores = nullptr;

  /*
  Static arrays vs dynamic arrays

  Static arrays are declared on the stack, while dynamic arrays are
  declared on the heap.
  `scores` is a static array of int values, and its elements are initialized
  to 1, 2, 3, ..., 10. Static arrays have a fixed size that is determined at
  compile time.
  */
  int scores[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // Lives on the stack

  // std::size can be used with static arrays
  std::cout << "scores size : " << std::size(scores) << std::endl;
  // static arrays can be used with ranged based for loops
  for (auto s : scores) // ranged based for loop
  {
    std::cout << "value : " << s << std::endl;
  }

  // `pScores1` is an array of int values, and all its elements will be initialized to 0.
  int *pScores1{new (std::nothrow) int[size]{}}; // Lives on the heap.

  for (size_t i = 0; i < size; i++)
  {
    *(pScores1 + i) = i + 1;
  }

  /*
   Need to remember that there is a minor drawback when using dynamic arrays,
   namely, that std::size or range-for loops can't be used with them.
   While dynamic arrays are a powerful data structure, it is important to be
   aware of their limitations. If you need to use std::size or range-for loops,
   you should use a different data structure, such as a vector.
  */

  // std::cout << "pScores1 size : " << std::size(pScores1) << std::endl;
  /*
  for( auto s : pScores1){
      std::cout << "value : " << s << std::endl;
  }
  */

  // Deallocate the memory
  delete[] pScores1;
  pScores1 = nullptr;

  return 0;
}
```

## 20. Practice #5: Merge two arrays.

At last, I've final challenge for you, today. The task is simple, you will have two static arrays, and you need to merge them together. Simple right, so let's jump right into it:

```cpp
#include <iostream>

/*
You are given two arrays of int . Your job is to merge them into a new larger array.
For example if your two input arrays are

  int data1[] {1,2,3,4,5,66,77};
  int data2[] {10,20,30,40,50,60};

Your code would merge them into a new array conveniently called pNewArray with the data

1 2 3 4 5 66 77 10 20 30 40 50 60

Once you have the new merged array, you'll print it out with std::cout exactly like

1 2 3 4 5 66 77 10 20 30 40 50 60

with elements separated by a single space and a single space after the last element.
*/

int main()
{
  // Declare and initialize two integer arrays
  int data1[]{1, 2, 3, 4, 5, 66, 77};
  int data2[]{10, 20, 30, 40, 50, 60};

  return 0;
}

```

Solution: [Practice #5 - Assignments Solutions](https://grzegorz-wolfinger-blog.vercel.app/posts/algorithms-intro)

---

## Summary.

As we conclude our exploration into the realm of pointers and dynamic memory allocation in C++, I hope you've gained a deeper understanding of these fundamental concepts. These tools are essential for any C++ programmer, enabling efficient memory management and the creation of sophisticated data structures.

Throughout this article, I've delved into the intricacies of pointers, comprehending their role as memory address holders and their ability to navigate through memory. I've also explored dynamic memory allocation, the process of acquiring memory during runtime, and the pitfalls to avoid when dealing with allocated memory.

Rather than using illustrations, I've provided code snippets to demonstrate the concepts and techniques discussed. These code snippets serve as practical examples of how to work with pointers and dynamic memory allocation in C++.

While I'm still learning new things about pointers myself, I hope this article has provided you, as a beginner, with a glimpse into the advanced world of C++ programming. By understanding pointers and dynamic memory allocation, you'll be better equipped to tackle more complex programming tasks.

Stay tuned for future installments as I continue to explore the fascinating aspects of C++ programming.

---

If you found this blog helpful and would like to support my work, you can buy me a coffee [BuyMeACoffee](https://www.buymeacoffee.com/grzegorzwolfinger).

---
