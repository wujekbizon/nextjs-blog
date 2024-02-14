---
title: 'Defining Algorithms: Powering Problem-solving with Precision'
date: '2023-11-30'
image: transforrmers.png
excerpt:  "Welcome to an exploration into the realm of algorithm design. Whether you're a beginner or someone seeking to deepen your understanding, this article is your gateway to comprehending the art of writing algorithms."
isFeatured: false
---

## 1. What is an algorithm ?

In simple terms, an algorithm is a step-by-step set of instructions designed to solve a specific problem or accomplish a task. It serves as a blueprint or recipe that guides the computer in performing a series of operations, making decisions, or organizing data.

But why is understanding and creating algorithms such a valuable skill? The answer lies in their ability to empower problem-solving with precision. By learning how to develop algorithms, you gain the ability to approach complex problems with a systematic and logical mindset. Algorithms enable you to break down intricate tasks into manageable steps, leading to efficient problem-solving and streamlined processes.

Mastering the art of algorithmic thinking equips you with a powerful tool for not only navigating the world of computer science but also approaching challenges in various domains. From optimizing search algorithms to writing efficient code, the ability to create algorithms empowers you to find innovative solutions, save time, and enhance productivity.

Now that we've established the significance of algorithms and how they empower problem-solving, it's time to delve into the practical aspects. Starting from the basics, let's explore the step-by-step process of creating simple algorithms and gradually progress to more advanced techniques. By understanding the foundational principles and building upon them, we'll navigate the intricacies of algorithm design with confidence and finesse. So, let's embark on this journey of discovery and elevate our algorithmic thinking to new heights.

---

###### Practice solutions for pointers are available at the bottom of this page.

---

## 2. C-String Manipulation:

#### Find and print the indices of all blank characters in a character array.

```cpp
// This code snippet counts the number of blank characters in a character array
  char message[]{"This characters array name `message` should contain 9 blank characters."};

  // Print message
  std::cout << "message : " << message << std::endl;

  // Initialize a counter to track the number of blank characters
  size_t blankCount{};

  // Iterate through the character array
  for (size_t i{0}; i < std::size(message); i++)
  {
    // Check if the current character is a blank character
    if (std::isblank(message[i]))
    {
      // Increment the counter if it is a blank character
      blankCount++;
      // Output the index of the blank character
      std::cout << "Found a blank character at index: [" << i << "]" << std::endl;
    }
  }
  // Print the total number of blank characters found
  std::cout << "In total we found " << blankCount << " blank characters." << std::endl;
```

#### Check whether each character in the given string is lowercase or uppercase.

```cpp
// This code snippet counts the number of lowercase and uppercase characters in a string
  char thought[]{"The C++ Programming Language is one of the most used on the Planet"};

  // Initialize counters for lowercase and uppercase characters
  size_t lowercaseCount{};
  size_t uppercaseCount{};

  // Print the original string for reference
  std::cout << "Original string: " << thought << std::endl;

  // Iterate through each character in the string
  for (auto character : thought)
  {
    // Check if the character is lowercase
    if (std::islower(character))
    {
      // Print the lowercase character
      std::cout << " " << character;
      // Increment the lowercase counter
      lowercaseCount++;
    }

    // Check if the character is uppercase
    if (std::isupper(character))
    {
      // Print the uppercase character
      std::cout << " " << character;
      // Increment the uppercase counter
      uppercaseCount++;
    }
  }

  // Print the total number of lowercase and uppercase characters found
  std::cout << std::endl;
  std::cout << "Found " << lowercaseCount << " lowercase characters and "
            << uppercaseCount << " uppercase characters." << std::endl;
```

#### Check if a character in the given char array is a digit.

```cpp
// Check if a character in given char array is a digit

  char statement[]{"Chuck Norris can speak 37 different languages. He fluently speaks 3. And he can code in any programming language known to man, using only binary 0s and 1s."};

  // Print the statement string
  std::cout << "statement : " << statement << std::endl;

  // Initialize a variable to count the digits
  size_t digitCount{};

  // Iterate through each character in the statement string
  for (auto character : statement)
  {

    // Check if the current character is a digit
    if (std::isdigit(character))
    {

      // Print the found digit
      std::cout << "Found digit : " << character << std::endl;

      // Increment the digit count
      digitCount++;
    }
  }

  // Print the total number of digits found
  std::cout << "Found " << digitCount << " digits in the statement string" << std::endl;

```

#### Converts string to uppercase (only even characters), then to lowercase, and finally capitalizes the first character and characters following periods.

```cpp
 #include <iostream>

int main()
{
  // Declare the original string
  char originalStr[]{"Chuck Norris can count to infinity. Twice. But only Chuck Norris knows what comes after infinity."};

  // Declare the destination string with the same size as the original string
  char destStr[std::size(originalStr)];

  // Convert characters to uppercase based on even or odd index
  for (size_t i{}; i < std::size(originalStr); i++)
  {
    // If the index is even, convert the character to uppercase,
    // if the index is odd, keep the character as is
    (i % 2 == 0) ? destStr[i] = std::toupper(originalStr[i]) : destStr[i] = originalStr[i];
  }
  // Print the uppercase string

  std::cout << "Original string : " << originalStr << std::endl;
  std::cout << "Uppercase string : " << destStr << std::endl;

  // Convert all characters to lowercase
  for (size_t i{}; i < std::size(originalStr); i++)
  {
    destStr[i] = std::tolower(originalStr[i]);
  }

  // Capitalize characters after spaces
  for (size_t i{}; i < std::size(originalStr); i++)
  {
    // Capitalize the first character
    if (i == 0)
    {
      destStr[i] = std::toupper(originalStr[i]);
    }

    // Capitalize characters following periods
    if (destStr[i] == '.')
    {
      // Check for out-of-bounds index
      if (i < std::size(originalStr) - 2)
      {
        // Capitalize the character two positions after the period
        destStr[i + 2] = std::toupper(originalStr[i + 2]);
      }
    }
  }

  // Print the lowercase string with capitalized characters
  std::cout << "Lowercase string : " << destStr << std::endl;
  return 0;
}
```

#### Count vowels and consonants in given C-string.

```cpp
#include <iostream>

int main()
{
  // Declare a character array named 'data' and initialize it with a string
  char data[]{"** Chuck Norris can speak 37 different languages. Fluently!! **"};

  // Declare an unsigned integer variable named 'vowelCount' and initialize it to 0
  unsigned int vowelCount{};
  // Declare an unsigned integer variable named 'consonantCount' and initialize it to 0
  unsigned int consonantCount{};

  // Iterate over each character in the 'data' array
  for (size_t i = 0; i < std::size(data); i++)
  {
    // Check if the current character is a punctuation mark, whitespace, digit, or null terminator
    if (std::ispunct(data[i]) || data[i] == ' ' || std::isdigit(data[i]) || data[i] == '\0')
    {
      // Skip the current character if it is any of the above
      continue;
    }
    // Check if the current character is a vowel (a, e, i, o, or u)
    if (std::tolower(data[i]) == 'a' || std::tolower(data[i]) == 'e' || std::tolower(data[i]) == 'i' || std::tolower(data[i]) == 'o' || std::tolower(data[i]) == 'u')
    {
      // Increment the vowel count
      vowelCount++;
    }
    else
    {
      // If the current character is not a vowel then it must be consonant
      // Increment the consonant count
      consonantCount++;
    }
  }
  // Print the vowel and consonant counts to the console
  std::cout << "The string contains " << vowelCount << " vowels and " << consonantCount << " consonants";
  return 0;
}
```

#### Replace whitespace characters with underscores in given string.

```cpp
 // Declare a character array named 'data' and initialize it with a string
  char data[]{"Chuck Norris once karate chopped a mountain in half. The other half is now known as California."};
  // Get the length of the 'data' array
  unsigned int size = std::size(data);
  // Allocate memory for a new character array named 'result' of the same size as 'data'
  char *result{new (std::nothrow) char[size]{}};

  // Iterate over each character in the 'data' array
  for (size_t i = 0; i < size; i++)
  {
    // Check if the current character is a space
    if (data[i] == ' ')
    {
      // Replace the current character with an underscore using pointer arithmetic
      *(result + i) = '_';
    }
    else // If the current character is not a space
    {
      // Copy the current character to the 'result' array
      *(result + i) = data[i];
    }
  }
  // Print a message to indicate the start of the modified string
  std::cout << "After replacing the spaces, we get: ";

  // Iterate over each character in the 'result' array
  for (size_t i = 0; i < size; i++)
  {
    // Check if the current character is the null terminator
    if (*(result + i) == '\0')
    {
      continue; // Skip the null terminator
    }

    // Print the current character to the console
    std::cout << *(result + i);
  }

  // Deallocate the memory allocated for the 'result' array
  delete[] result;
  result = nullptr;
```

#### Dynamically Allocating and Manipulating Character Arrays.

```cpp
#include <iostream>
#include <cstring>

int main()
{
  // Define four constant character arrays containing different text fragments
  const char src1[]{"Whether you need a responsive website"};
  const char src2[]{"we have the expertise to meet your unique requirements"};
  const char src3[]{"and deliver tailored solutions"};
  const char src4[]{"our aim is to empower businesses and private individuals"};

  // Declare a pointer named result to store a dynamically allocated character array
  char *result;

  // Allocate space for 5 characters and initialize all elements to null characters
  result = new char[5]{};

  // Copy character from src1 to result and add a null terminator
  std::strncpy(result, &src1[0], 1);

  // Copy character from src2 to result and add a null terminator
  std::strncpy(result + 1, &src2[6], 1);

  // Copy character from src3 to result and add a null terminator
  std::strncpy(result + 2, &src3[21], 1);

  // Copy  character from src4 to result and add a null terminator
  std::strncpy(result + 3, &src4[4], 1);

  // Iterate through the result array and convert each character to uppercase
  for (size_t i = 0; i < std::strlen(result); i++)
  {
    *(result + i) = std::toupper(*(result + i));
  }

  // Print the result string to the console
  std::cout << "We are " << result;

  delete[] result; // Deallocate the memory allocated for the result array

  result = nullptr; // Set the result pointer to nullptr

  return 0;
}
```

## 3. C++ Simple algorithms:

#### Swapping data between two arrays.

```cpp
    // Swapping data the hard way
    int arr0[5]{1, 2, 3, 4, 5};
    int arr1[5]{6, 7, 8, 9, 10};
    int temp[5];

    //Move data from arr1 into temp
    for (size_t i{ 0 }; i < std::size(arr1); i++) {
        temp[i] = arr1[i];
    }

    //Move data from arr0 to arr1
    for (size_t i{ 0 }; i < std::size(arr0); i++) {
        arr1[i] = arr0[i];
    }

    //Move data temp to arr0
    for (size_t i{}; i < std::size(temp); i++) {
        arr0[i] = temp[i];
    }

     // Print arr0
    std::cout << "arr0 : ";
    for (size_t i{}; i < std::size(arr0); i++)
    {
        std::cout << arr0[i] << " ";
    }
    std::cout << std::endl;

    // Print arr1
    std::cout << "arr1 : ";
    for (size_t i{}; i < std::size(arr1); i++)
    {
        std::cout << arr1[i] << " ";
    }
```

#### Swapping data between two arrays - Possible uses of Pointer Arithmetic

```cpp
int main()
{
  int arr0[5]{1, 2, 3, 4, 5};
  int arr1[5]{6, 7, 8, 9, 10};

  int *pArr1{arr1};
  int *pArr0{arr0};
  int *temp{nullptr};

  temp = pArr1;
  pArr1 = pArr0;
  pArr0 = temp;

  // Print arr0
  std::cout << "arr0 : ";
  for (size_t i{}; i < std::size(arr0); i++)
  {
    std::cout << *(pArr0 + i) << " ";
  }
  std::cout << std::endl;
  // Print arr1
  std::cout << "arr1 : ";
  for (size_t i{}; i < std::size(arr1); i++)
  {
    std::cout << *(pArr1 + i) << " ";
  }
  return 0;
}
```

## Assignments Solutions.

---

#### Practice #2: Finding the Maximum Element and its Address in an Integer Array.

```cpp
#include <iostream>

int main()
{
  // The array 'data' contains a collection of integers.
  int data[]{181, 82, 22, 53, 19, 1, 51, 217, 12, 11};
  // The variable 'maxAddress' is a pointer that points to the first element of the array 'data'.
  int *maxAddress{data};

  // A for loop is used to iterate over each element of the array.
  for (size_t i = 0; i < std::size(data); i++)
  {
    // The if statement inside the for loop compares the current element with the value pointed by 'maxAddress'
    // and if it is greater, updates the value of 'maxAddress' to the current element.
    if (data[i] > *maxAddress)
    {
      *maxAddress = data[i];
    }
  };

  // The maximum value is then printed to the console using the std::cout statement.
  std::cout << *maxAddress;

  return 0;
}
```

#### Practice #3: Shoot forward

```cpp
#include <iostream>

int main()
{
  // Declaration of an integer array named "data" with 10 elements
  int data[]{1, 3, 6, 3, 9, 3, 5, 7, 2, 11};
  // Declaration of an unsigned integer variable named "offset" with the value 4
  unsigned int offset = 4;

  // Loop through each element in the array
  for (int i = 0; i < std::size(data); i++)
  {
     // Check if the current index is equal to the offset
    if (i == offset)
    {
      // If equal, output the element that is offset slots away from the beginning
      std::cout << "The element " << offset << " slots away from the beginning is : " << *(data + offset);
    }
  }
  return 0;
}
```

#### Practice #4: Find the address of the smallest element.

```cpp
#include <iostream>

int main()
{
  int data[]{11, 2, 52, 53, 9, 13, 5, 7, 12, 11};
  // initialize pointer to the first element of the array, 'data'
  int *minAddress{data};

  for (size_t i = 0; i < std::size(data); i++)
  {
    // compare the value at 'data + i' with the value at '*minAddress'
    if (*(data + i) < *minAddress)
    {
      // update 'minAddress' to point to the current smallest value
      minAddress = data + i;
    }
  }
  // print the final address of the smallest element
  std::cout << minAddress;

  return 0;
}
```

#### Practice #5: Merge two arrays.

```cpp
#include <iostream>

int main()
{
  // Declare and initialize two integer arrays
  int data1[]{1, 2, 3, 4, 5, 66, 77};
  int data2[]{10, 20, 30, 40, 50, 60};

  // Calculate the size of each array
  int size1 = std::size(data1);
  int size2 = std::size(data2);

  // Declare and initialize pointers to the first elements of each array
  int *pData1{data1};
  int *pData2{data2};

  // Dynamically allocate memory for a new array to store the merged data
  // Allocate memory for a new array of size `size1 + size2`
  int *pNewArray{new (std::nothrow) int[size1 + size2]{}};

  // Merge the two arrays into the new array using pointer arithmetic
  for (size_t i = 0; i < size1 + size2; i++)
  {
    // Check if the index is within the bounds of data1 array
    // Copy the element from data1 to pNewArray
    // For indices beyond data1, copy from data2 to pNewArray, adjusting the index
    (i < size1) ? *(pNewArray + i) = *(pData1 + i) : *(pNewArray + i) = *(pData2 + (i - size1));
  }

  // Print the elements of the merged pNewArray
  for (size_t i = 0; i < size1 + size2; i++)
  {
    std::cout << *(pNewArray + i) << " ";
  }

  // Deallocate the dynamically allocated memory
  delete[] pNewArray; // Deallocate the memory used for the pNewArray

  return 0;
}
```
