---
title: 'Defining Algorithms: Powering Problem-solving with Precision'
date: '2023-10-09'
image: transforrmers.png
excerpt:  "Welcome to an exploration into the realm of algorithm design. Whether you're a beginner or someone seeking to deepen your understanding, this article is your gateway to comprehending the art of writing algorithms. In this engaging read, I will demystify the process, share valuable insights, and shed light on the world of algorithms."
isFeatured: false
---

## 1. What is an algorithm ?

In simple terms, an algorithm is a step-by-step set of instructions designed to solve a specific problem or accomplish a task. It serves as a blueprint or recipe that guides the computer in performing a series of operations, making decisions, or organizing data.

But why is understanding and creating algorithms such a valuable skill? The answer lies in their ability to empower problem-solving with precision. By learning how to develop algorithms, you gain the ability to approach complex problems with a systematic and logical mindset. Algorithms enable you to break down intricate tasks into manageable steps, leading to efficient problem-solving and streamlined processes.

Mastering the art of algorithmic thinking equips you with a powerful tool for not only navigating the world of computer science but also approaching challenges in various domains. From optimizing search algorithms to writing efficient code, the ability to create algorithms empowers you to find innovative solutions, save time, and enhance productivity.

Now that we've established the significance of algorithms and how they empower problem-solving, it's time to delve into the practical aspects. Starting from the basics, let's explore the step-by-step process of creating simple algorithms and gradually progress to more advanced techniques. By understanding the foundational principles and building upon them, we'll navigate the intricacies of algorithm design with confidence and finesse. So, let's embark on this journey of discovery and elevate our algorithmic thinking to new heights.

## 2. C++ Simple algorithms:

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

## 3. Assignments Solutions.

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
