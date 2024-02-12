---
title: 'Build Better C++ Code with SOLID Principles'
date: '2024-02-10'
image: solid.jpg
excerpt:  "Beyond inheritance and polymorphism lies the true power of C++ OOP. Embrace SOLID to unlock design patterns, code flexibility, and a future-proof architecture."
isFeatured: true
---

## 1. "SOLID" Introduction.

Ready to take your coding skills to the next level? Buckle up, because we're diving into the world of SOLID design principles, your key to building cleaner, stronger, and more maintainable code.

Now, don't worry if the term "SOLID" sounds intimidating. Think of it as a handy acronym for five key principles that software design guru Uncle Bob (a.k.a. Robert C. Martin) cooked up to help developers like you and me write rock-solid code.

But wait, there's more! Uncle Bob is a design principles powerhouse, with countless ideas under his belt. The "SOLID" principles are just the greatest hits, chosen for their massive impact on modern software design.

So, why should you care? Simple: knowing these principles is like having a secret decoder ring for understanding modern design patterns. This means you'll be able to follow along effortlessly when these patterns come up in your coding journey, unlocking a whole new level of understanding.

So, are you ready to unlock the power of SOLID design? Stay tuned, because we're about to break down each principle in a beginner-friendly way, making you a code-crafting master in no time!

## 2. Single Responsibility Principle.

So. we're going to begin our discussion of the solid design principles by looking at the single responsibility principle.

---

The single responsibility principle (SRP) is a fundamental design guideline in object-oriented programming
that advocates for classes to have a single reason to change. This means that each class should focus on a
specific responsibility and delegate other functionalities to separate classes. By adhering to the SRP,
developers can create more maintainable, reusable, and testable code.

---

Let me give you an example from the real world. Let's suppose that I'm a carpenter, so I'm getting paid to actually make furniture. Now, this is my primary responsibility. Of course, I can break down my carpentry skills into different parts, but my primary responsibility is to make something out of wood. So if somebody comes up to me and asks me to make copies of all the invoices for them, well, that's not my primary responsibility. Somebody else should do that, or maybe they should just go to the copy center and make copies of the documents themselves. But it's not my responsibility. And it's the same idea being propagated to software engineering as well.

So let's suppose we decide to create a journal class. It allows you to replicate a journal and store your secrets.

```cpp
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

class Journal
{
    // Represents a journal with a title and a list of entries
  public:
    std::string_view title;
    std::vector<std::string> entries{};

    // Constructor that sets the title of the journal
    Journal(const std::string &entry) : title(title)
    {
    }

    // Adds an entry to the journal
    void add_entry(const std::string &entry);

    // Saves the journal entries to a file but to keep Single Responsibility Principle
    // is better to delegates the saving functionality to the `PersistenceManager` class
    void save(const std::string &filename);
};

// Adds an entry to the journal
void Journal::add_entry(const std::string &entry)
{
    // Assigns a unique entry number
    static int count{1};
    // Adds the entry to the list with a numbered prefix
    entries.push_back(std::to_string(count++) + ": " + entry);
}

// Saves the journal entries to a file
void Journal::save(const std::string &filename)
{
    // Creates a file stream to write to the specified filename
    std::ofstream ofs{filename};
    // Iterates through the list of entries and writes each entry to the file
    for (auto &e : entries)
        ofs << e << std::endl; // Writes each entry to the file with a newline
}

```

In the context of managing journal entries, the SRP suggests that the Journal class should focus solely on
managing the journal entries themselves, such as adding, removing, and retrieving entries. It should not be
responsible for saving the entries to a file. Instead, the saving functionality should be delegated to a
separate class, such as PersistenceManager.

```cpp
// Class for managing the persistence of journal entries
class PersistenceManager
{
  public:
    // Saves the journal entries from the specified `journal` object to the specified `filename`
    void save(const Journal &j, const std::string &filename);
};

// Saves the journal entries from the specified `journal` object to the specified `filename`
void PersistenceManager::save(const Journal &j, const std::string &filename)
{
    try
    {
        // Allocate memory for the stringstream object
        std::stringstream buffer;

        // Writes the journal entries to the string stream object
        for (auto &s : j.entries)
            buffer << s << std::endl; // Writes each entry to the buffer

        // Write the contents of the stringstream to the file
        std::ofstream ofs{filename};
        ofs << buffer.str(); // Writes the buffer's contents to the file
    }
    catch (const std::bad_alloc &e)
    {
        // Handles memory allocation errors by printing an error message to the console
        std::cerr << "Failed to allocate memory: " << e.what() << std::endl;
        return;
    }
}


int main()
{
    // Creates a journal with the title
    Journal journal{"Dear Diary"};
    // Adds entries to the journal
    journal.add_entry("I ate a bug");
    journal.add_entry("I cried today");
    journal.add_entry("I implemented single responsibility design principle");

    // Instead of calling the `save` method directly on the `Journal` object,
    // delegates the saving functionality to the `PersistenceManager` class
    PersistenceManager pm;
    pm.save(journal, "diary.txt");

    // Gets user input to prevent the program from exiting prematurely
    getchar();
    return 0;
}
```

This separation of concerns promotes code modularity and improves maintainability. The Journal class remains
focused on its core responsibility of managing entries, while the PersistenceManager class handles the specific
details of file operations, such as opening, reading, and writing the file. This separation prevents the Journal
class from becoming cluttered with file-related code, making it easier to reason about and modify the core
journal management logic.
In the example code, the PersistenceManager class encapsulates the logic for saving journal entries to a file.
It utilizes a stringstream object to efficiently buffer the entries before writing them to the file.
It also handles memory allocation errors gracefully using a try-catch block.

The code effectively applies the SRP by delegating the saving functionality to a separate class, allowing
the Journal class to focus on its primary responsibility of managing journal entries.
By following the SRP, we can create more maintainable, reusable, and testable code, leading to more robust
and efficient software solutions.

## 3. Open-Closed Principle

The second SOLID design principle we'll explore is the Open-Closed Principle (OCP).

Imagine building an online store with endless product possibilities. You want to offer flexible filtering for your customers, but you don't want to rewrite code every time a new filter option is needed. That's where OCP comes in.

Think of OCP as your coding superhero with two superpowers:

- Open for Extension: This means your code can easily adapt to new requirements without major changes, like a superhero expanding their skill set.
- Closed for Modification: This ensures your existing code remains stable and reliable, even with new additions, like the superhero's core strength never wavering.

Now, let's put OCP into action with an example: building a clothing store. We have shelves for shirts, pants, dresses, and we want to add more categories later. So we need to write code that implements this, adhering to OCP.

Instead of hardcoding filters for each specific criteria (color, size, etc.), we define generic Specification objects. These act as modular filters, each encapsulating a single condition. New filters can be easily added by creating new Specification subclasses, without modifying existing code.

Think of it like adding new shelves to our store. We don't need to rearrange everything; we simply add a new shelf specifically designed for the new category. This keeps the code flexible, maintainable, and open for future extension, upholding the OCP principle.

Furthermore, the AndSpecification allows combining multiple filters seamlessly. If we need to find green and large products, we can combine the ColorSpecification and SizeSpecification using the && operator, creating a new combined filter on the fly. This modularity empowers us to build intricate filtering logic without modifying the core filtering mechanism.

Remember, OCP is about writing code that is open for extension but closed for modification. This code exemplifies that principle, ensuring your product filtering system can adapt and grow as your needs evolve.

So, let's review the code together. I placed the comments inside code snippets for better clarification.

```cpp
#include <iostream>
#include <string>
#include <vector>

// Define an enum class `Color` to represent the colors of products.
enum class Color
{
    red,
    green,
    blue
};

// Define an enum class `Size` to represent the sizes of products.
enum class Size
{
    small,
    medium,
    large
};

// Define a struct `Product` to represent a product.
struct Product
{
    // The name of the product.
    std::string name;

    // The color of the product.
    Color color;

    // The size of the product.
    Size size;
};

// Define a class `ProductFilter` to represent a product filter.
class ProductFilter
{
    // Define a typedef `Items` for a vector of pointers to `Product` objects.
    typedef std::vector<Product *> Items;

  public:
    // Define a function `by_color()` to filter products by color.
    Items by_color(Items items, Color color)
    {
        // Define a vector `result` to store the filtered products.
        Items result;
        // Iterate over the `items` vector and add products to the `result` vector
        // if their color matches the specified `color`.
        for (auto &i : items)
            if (i->color == color)
                result.push_back(i);
        // Return the `result` vector containing the filtered products.
        return result;
    }

    // Define a function `by_size()` to filter products by size.
    Items by_size(Items items, Size size)
    {
        // Define a vector `result` to store the filtered products.
        Items result;
        /*
        Iterate over the `items` vector and add products to the `result` vector if
        their size matches the specified `size`.
        */
        for (auto &i : items)
            if (i->size == size)
                result.push_back(i);
        // Return the `result` vector containing the filtered products.
        return result;
    }

    // Define a function `by_size_and_color()` to filter products by both size and color.
    Items by_size_and_color(Items items, Color color, Size size)
    {
        // Define a vector `result` to store the filtered products.
        Items result;
        /*
        Iterate over the `items` vector and add products to the `result` vector if their
        size and color match the specified values.
        */
        for (auto &i : items)
            if (i->size == size && i->color == color)
                result.push_back(i);
        // Return the `result` vector containing the filtered products.
        return result;
    }
};

// template struct AndSpecification declaration
template <typename T> struct AndSpecification;

// `Specification` is a template class representing a generic filter
// condition for objects of type `T`.
template <typename T> class Specification
{
  public:
    // Destructor
    virtual ~Specification() = default;

    // `is_satisfied` checks whether the specified object meets the filter
    // condition.
    virtual bool is_satisfied(T *item) = 0;

    // new: breaks OCP if you add it post-hoc
    AndSpecification<T> operator&&(Specification<T> &&other)
    {
        return AndSpecification<T>(*this, other);
    }
};

/* defines an overloaded operator for combining two Specification objects using the && operator.
   This operator takes two references to Specification objects (first and second) and returns
   a new AndSpecification object that combines the two filtering criteria.
*/
template <typename T> AndSpecification<T> operator&&(Specification<T> &first, Specification<T> &second)
{
    /*
    This operator overload allows combining two specifications using
    the logical AND (`&&`) operator.
    It returns an `AndSpecification` object that represents the
    logical AND of the two input specifications.
    The `AndSpecification` object is constructed with references to
    the two input specifications, so it can access their member
    functions to check whether the specified object meets the filter
    condition.
    */
    return {first, second};
}

template <typename T> class Filter
{
    // A filter is a class that takes a collection of objects of type T and a
    // specification, and returns a new collection containing only the objects
    // that satisfy the specification.

    // The `filter` method is a pure virtual function that must be implemented
    // by any class that inherits from `Filter`. This method takes a
    // `std::vector<T *>` containing the objects to be filtered, and a
    // `Specification<T>` object that represents the filter criteria. The
    // method must return a new `std::vector<T *>` containing only the objects
    // that satisfy the filter criteria.
  public:
    virtual std::vector<T *> filter(std::vector<T *> items, Specification<T> &spec) = 0;
};

class BetterFilter : Filter<Product>
{
    /*
     `BetterFilter` is a class that inherits from `Filter<Product>`, which
     means that it can be used to filter collections of products. This
     class overrides the `filter` method to provide a more efficient way
     to filter products.
     The `filter` method takes a `std::vector<Product *>` containing the
     products to be filtered, and a `Specification<Product>` object that
     represents the filter criteria. The method iterates through the
     products in the `items` vector and adds the products that satisfy the
     specifications to the `result` vector.
    */

  public:
    std::vector<Product *> filter(std::vector<Product *> items, Specification<Product> &spec) override
    {
        std::vector<Product *> result;
        for (auto &item : items)
            if (spec.is_satisfied(item))
                result.push_back(item);
        return result;
    }
};

// `ColorSpecification` is a struct that inherits from `Specification<Product>`,
// which means it can be used to filter products based on their color.
struct ColorSpecification : Specification<Product>
{
    // `color` is a member variable that stores the color of the products
    // to be filtered.
    Color color;

    // Constructor initializes the `color` member to the specified color.
    explicit ColorSpecification(Color color) : color{color}
    {
    }

    // `is_satisfied` checks whether the specified product's color matches
    // the specified color.
    bool is_satisfied(Product *item) override
    {
        // Returns `true` if the product's color is equal to the specified
        // color, and `false` otherwise.
        return item->color == color;
    }
};

// `SizeSpecification` is a structure that inherits from `Specification<Product>`,
// which means that it can be used to filter products based on their size.
struct SizeSpecification : Specification<Product>
{
    // `size` is a member variable that stores the size of the products
    // to be filtered.
    Size size;

    // Constructor initializes the `size` member to the specified size.
    explicit SizeSpecification(Size size) : size(size)
    {
    }

    // `is_satisfied` checks whether the specified product's size matches
    // the specified size.
    bool is_satisfied(Product *item) override
    {
        // Returns `true` if the product's size is equal to the specified
        // size, and `false` otherwise.
        return item->size == size;
    }
};

template <typename T> struct AndSpecification : Specification<T>
{
    // `first` and `second` are references to the two specifications to be
    // combined. These references allow the `AndSpecification` object to
    // access the member functions of the specifications being combined.
    Specification<T> &first;
    Specification<T> &second;

    // The constructor initializes the `first` and `second` members with
    // the references to the specifications passed to the constructor.
    AndSpecification(Specification<T> &first, Specification<T> &second) : first(first), second(second)
    {
    }

    // `is_satisfied` checks whether the specified object meets the filter
    // condition. This function returns `true` if both of the specifications
    // being combined are satisfied for the specified object.
    bool is_satisfied(T *item) override
    {
        return first.is_satisfied(item) && second.is_satisfied(item);
    }
};

int main()
{
    // Create three products with different colors and sizes:
    Product apple{"Apple", Color::green, Size::small};
    Product tree{"Tree", Color::green, Size::large};
    Product house{"House", Color::blue, Size::large};

    // Create a vector of pointers to the products:
    std::vector<Product *> items{&apple, &tree, &house};

    // Create a `BetterFilter` object to filter products:
    BetterFilter bf;
    // Create a `ColorSpecification` object to filter for green products:
    ColorSpecification green(Color::green);

    // Use the `filter` method to get a list of green products:
    for (auto &item : bf.filter(items, green))
    {
        // Print the name of each green product:
        std::cout << item->name << " is green \n";
    }

    // Create a `SizeSpecification` object to filter for large products:
    SizeSpecification large(Size::large);

    // Create an `AndSpecification<Product>` object to combine the green and large criteria:
    AndSpecification<Product> green_and_large(green, large);

    // Use the `filter` method to get a list of green and large products:
    for (auto &item : bf.filter(items, green_and_large))
    {
        std::cout << item->name << " is green and large \n";
    }

    // Alternatively, combine the specifications using the && operator and
    // store the result in a temporary variable:
    auto spec = green && large;

    // Use the `filter` method with the combined specification:
    for (auto &item : bf.filter(items, spec))
    {
        // Print the name of each product that meets both criteria:
        std::cout << item->name << " is green and large\n";
        // **Note:** This explicitly creates an AndSpecification<Product> object using the && operator.
    }
    // Create an explicit `ColorSpecification` object for blue:
    auto colorSpec = ColorSpecification(Color::blue);

    // Create an explicit `SizeSpecification` object for large:
    auto sizeSpec = SizeSpecification(Size::large);

    //  Combine the specifications using the && operator, creating an AndSpecification<Product> object:
    auto spec4 = colorSpec && sizeSpec;

    for (auto &item : bf.filter(items, spec4))
        // Print the name of each product that meets both criteria:
        std::cout << item->name << " is blue and large\n";

    std::cout << "Done!" << std::endl;
    return 0;
}
```

The main function showcases the product filtering system in action:

- It creates example products with different colors and sizes.
- A BetterFilter instance is used for efficient filtering.
- It demonstrates filtering products based on color using ColorSpecification.
- It then combines ColorSpecification with SizeSpecification using AndSpecification to filter for specific color and size combinations.
- The combined specification can be created directly with the && operator for convenience.
- Finally, it shows filtering with separate ColorSpecification and SizeSpecification objects combined through the && operator, highlighting another approach.

The main function effectively tests and demonstrates the flexibility of the filtering system built upon the OCP principles.

I hope this clarifies the Open/Closed Principle in action. Now, let's explore how we can further enhance code flexibility and robustness through the Liskov Substitution Principle.

## 3. Liskov Substitution Principle.

The Liskov Substitution Principle: Ensuring Subtypes Adhere to Expectations. In the realm of object-oriented programming, the Liskov Substitution Principle (LSP) stands as a cornerstone of sound design. It asserts that objects of a superclass should be replaceable with objects of its subtypes without affecting the correctness of the program. This principle, derived from the work of Barbara Liskov, advocates for maintaining consistency and predictability in the behavior of derived classes.

To illustrate the essence of LSP, consider a scenario where we represent shapes using a class hierarchy. The Rectangle class defines the attributes and behaviors common to all rectangles, such as width, height, and area calculation. A specific subtype, Square, inherits from Rectangle and introduces the constraint that the width and height must be equal.

```cpp
#include <iostream>
#include <string>
#include <vector>

// Define a class named Rectangle with protected member variables width and height
class Rectangle
{
  protected:
    int width, height;

  public:
    // Constructor initializes width and height with provided values
    Rectangle(const int width, const int height) : width{width}, height{height}
        // Use member initialization list to set member variables directly
    {
    }

    // Getter function to return the width (const member function)
    int get_width() const
    {
        return width;
    }

    // Virtual setter function to set the width (const member function)
    virtual void set_width(const int width)
    {
        this->width = width;
    }

    // Getter function to return the height (const member function)
    int get_height() const
    {
        return height;
    }

    // Virtual setter function to set the height (const member function)
    virtual void set_height(const int height)
    {
        this->height = height;
    }

    // Function to calculate and return the area (const member function)
    int area() const
    {
        return width * height;
    }
};

// Class Square inherits from Rectangle, representing a square shape
class Square : public Rectangle
{
  public:
    // Constructor initializes square with provided size
    Square(int size) : Rectangle(size, size)
    {
    }

    // Override setter function to update both width and height simultaneously
    void set_width(int width) override
    {
        this->width = this->height = width;
    }

    // Override setter function to update both width and height simultaneously
    void set_height(int height) override
    {
        this->width = this->height = height;
    }
};
```

Implementing the Square class directly within the Rectangle hierarchy appears straightforward. However, this approach can lead to potential LSP violations. For instance, if the set_width() or set_height() methods of the Square class allow for unequal values, it would contradict the inherent property of a square. To circumvent this issue, consider employing a factory class like RectangleFactory.

```cpp

// Declare and define the RectangleFactory class
class RectangleFactory
{
  public:
    // Factory function to create a Rectangle object with given width and height
    static Rectangle create_rectangle(int width, int height);
    // Factory function to create a Square object with given size
    static Rectangle create_square(int size);
};

// Creates a Rectangle object with given width and height
Rectangle RectangleFactory::create_rectangle(int width, int height)
{
    // Validate input values
    if (width <= 0 || height <= 0)
    {
        throw std::invalid_argument("Width and height must be positive");
    }

    // Try creating the Rectangle object
    try
    {
        return Rectangle(width, height);
    }
    catch (const std::exception &e)
    {
        // Handle allocation failures or other exceptions
        throw std::runtime_error("Failed to create Rectangle: " + std::string(e.what()));
    }
}

// Creates a Square object with the given size (side length)
Rectangle RectangleFactory::create_square(int size)
{
    // Validate input value
    if (size <= 0)
    {
        throw std::invalid_argument("Size must be positive");
    }
    // Try creating the Square object (implicitly cast to Rectangle)
    try
    {
        return Square(size);
    }
    catch (const std::exception &e)
    {
        // Handle allocation failures or other exceptions
        throw std::runtime_error("Failed to create Square: " + std::string(e.what()));
    }
}

```

This class serves as a centralized entity responsible for creating instances of either Rectangle or Square objects. It maintains the distinction between the two shapes, ensuring that only valid squares are created.
The RectangleFactory approach offers several advantages. It promotes modularity and decoupling, separating the creation of shapes from their actual implementation. This allows for different implementations of Rectangle and Square classes without affecting the code that uses them,
enhancing code reusability and flexibility. Moreover, the RectangleFactory approach enhances code maintainability. By encapsulating the creation process, it becomes easier to track object creation and ensure that objects are created correctly, reducing the risk of errors and improving code quality overall.

Let's implement a process function that will serve as a key component in demonstrating the Liskov Substitution Principle (LSP) while also simulating a functional operation on rectangles/squares and providing useful output for analysis or testing. Finally, in the main function, we can see the LSP in action.

```cpp

void process(Rectangle &r)
{
    // Store the original width for later comparison
    int original_width = r.get_width();

    // Set the height of the rectangle to 10
    r.set_height(10);

    // Calculate the expected area based on the original width and the new height
    int expected_area = original_width * 10;

    // Calculate the actual area of the modified rectangle
    int actual_area = r.area();

    std::cout << "expected area = " << expected_area << ", got " << actual_area << std::endl;
}

int main()
{
    // Use RectangleFactory to create objects dynamically

    // Create a Rectangle object with width 3 and height 4
    Rectangle rect = RectangleFactory::create_rectangle(3, 4);

    // Create a Square object with size 5
    Rectangle square = RectangleFactory::create_square(5);

    // Call process functions to modify and print area
    process(square);
    process(rect);

    return 0;
}

```

So now, we successfully demonstrate the Liskov Substitution Principle (LSP) with the following key points:

- Base Class Rectangle: Defines the common interface for both rectangles and squares with width, height, and area-related functions.
- Derived Class Square: Inherits from Rectangle and overrides setter functions to maintain square properties while fulfilling the base class contract.
- Polymorphism: process function operates on Rectangle references, treating both Rectangle and Square objects based on their actual types (polymorphism).
- Factory Pattern: RectangleFactory dynamically creates Rectangle or Square objects, showcasing LSP even before knowing the specific type.
- Error Handling: Input validation and exception handling enhance robustness.

We have successfully implemented the Liskov Substitution Principle (LSP) by establishing a well-defined base class with clear inheritance and virtual functions. This allows derived classes to specialize behavior while adhering to the base class contract. This, in turn, enables dynamic object creation and substitution without disrupting program logic, demonstrating a key principle of object-oriented design.

In conclusion, the LSP serves as a cornerstone of object-oriented design, ensuring that subtypes fulfill the expectations set by their base classes. While directly inheriting from the base class might seem convenient, it can introduce potential issues where derived classes violate the LSP. Employing a factory class like RectangleFactory offers a more flexible, maintainable, and robust solution, promoting consistent and predictable behavior throughout the system.

## 4. Understanding the Interface Segregation Principle (ISP).

---

The Interface Segregation Principle (ISP) is a fundamental design principle in object-oriented
programming, that aims to modularize interfaces to make them more targeted and focused.
This helps to improve code maintainability, flexibility, and reusability.

---

The Interface Segregation Principle, aims to prevent overly large interfaces that force implementers to do too much. Imagine a document class representing a document readable from a file. We can create an interface IMachine with pure virtual methods. A multifunction printer (MFP) that can print, scan, and fax can seamlessly use this interface.

However, problems arise when implementing just a printer or scanner with only the IMachine interface. Imagine needing a scanner. What do we put in the print and fax methods?

Several options exist:

- Throw an exception: Signal invalid behavior by throwing an exception.
- Leave them blank: Implement empty bodies for print and fax. Calling scanner.print() wouldn't do anything.

Both approaches send the wrong message to the client. They imply a scanner that can also print, which is untrue. This issue stems from the overly broad IMachine interface. Ideally, we need separate, specific interfaces because no client requires a device that can always print, scan, and fax.

```cpp
#include <iostream>

class Document
{
  public:
    // ... members and methods of the Document class ...
};

/*
    Issues with the original IMachine interface:
    1. Recompile: Modifying IMachine requires recompiling all dependent classes,
    even if they only use a subset of its functionality.

    2. Client does not need this: Clients that only need printing capabilities are
    forced to link against unnecessary faxing and scanning functions.

    3. Forcing implementors to implement too much: Classes like Scanner have to implement
    unused methods, increasing complexity and potential for errors.

    Potential solutions: Separate interfaces for specific functionalities:
*/
class IMachine
{
  public:
    virtual void print(Document &doc) = 0;
    virtual void scan(Document &doc) = 0;
    virtual void fax(Document &doc) = 0;
};

class MFP : public IMachine
{
  public:
    void print(Document &doc) override
    {
        // print logic
    }
    void scan(Document &doc) override
    {
        // scan logic
    }
    void fax(Document &doc) override
    {
        // fax logic
    }
};

class Scanner : public IMachine
{
  public:
    void print(Document &doc) override
    {
        // don't need this
    }
    void scan(Document &doc) override
    {
        // we only need this
    }
    void fax(Document &doc) override
    {
        // and don't need this
    }
};

```

By following the interface segregation principle, we create smaller, more focused interfaces that accurately reflect a device's capabilities. This leads to clearer code, fewer errors, and more maintainable systems.

In the example provided, the IMachine interface is broken down into smaller, more specific interfaces: IPrinter, IScanner, and IFax. This allows implementers, such as Scanner and Printer classes, to only implement the methods that are relevant to their functionality. This approach decouples classes and reduces code duplication, making the code more maintainable and easier to modify. The Machine class demonstrates how to combine multiple interfaces into a single object, effectively representing a multi-functional device like a multifunction printer (MFP). By inheriting from both IPrinter and IScanner, the Machine class can handle both printing and scanning tasks, offering a more flexible and reusable solution compared to a monolithic interface.

```cpp
// Design interface segregation

// Interfaces for printer, scanner, and fax functionality
class IPrinter
{
  public:
    virtual void print(Document &doc) = 0;
};

class IScanner
{
  public:
    virtual void scan(Document &doc) = 0;
};

class IFax
{
  public:
    virtual void fax(Document &doc) = 0;
};

// Concrete classes implementing the interfaces
class Scanner : public IScanner
{
  public:
    void scan(Document &doc) override
    {
        // Scanning logic
        std::cout << "Scanning document..." << std::endl;
    }
};

class Printer : public IPrinter
{
  public:
    void print(Document &doc) override
    {
        // Printing logic
        std::cout << "Printing document..." << std::endl;
    }
};

// Composite interface for machines with printing and scanning capabilities
class IMachine : public IPrinter, public IScanner
{
};

class Machine : public IMachine
{
  private:
    // build a decorator
    IPrinter &printer;
    IScanner &scanner;

  public:
    // constructor
    Machine(IPrinter &printer, IScanner &scanner) : printer(printer), scanner(scanner)
    {
    }

    // destructor
    ~Machine()
    {
    }

    void print(Document &doc) override
    {
        printer.print(doc);
    }

    void scan(Document &doc) override
    {
        scanner.scan(doc);
    }
};

int main()
{
    Document document;
    Printer printer;
    Scanner scanner;
    Machine machine(printer, scanner);

    machine.print(document);
    machine.scan(document);

    return 0;
}
```

By adhering to the ISP, developers can write cleaner, more modular, and maintainable code, leading to better-structured and more flexible applications. The ISP is a valuable tool for OOP developers, particularly for beginners who are learning about design principles and modularization.

The Interface Segregation Principle (ISP) is a way to avoid forcing implementors to implement methods that they don't need. This can make code more modular and easier to maintain. The ISP can also improve code reuse. By breaking down interfaces into smaller, more specific ones, you can create more reusable components. The ISP is often used in conjunction with other design principles, such as the Dependency Inversion Principle (DIP).

## 5. Dependency Inversion Principle.

So the final principle that we're going to take a look at is the dependency inversion principle. Now, I'm sure that many of you have heard about dependency injection, but the dependency inversion principle isn't really about injection. It's simply specifying the best way to form dependencies between different objects.

---

Dependency Inversion Principle (DIP) is a crucial design principle that promotes loose coupling and code maintainability. It advocates for high-level modules to depend on abstractions rather than low-level implementations. This approach ensures that high-level modules are not tied to specific low-level details, making them more adaptable to change and easier to reuse.

---

Let's implement a simple family relationship example.

```cpp

/**
 * An enum representing the different types of relationships between two persons.
 */
enum class Relationship
{
    parent,
    child,
    sibling
};

/**
 * A structure representing a person who has a name.
 */
struct Person
{
    std::string name;
};

/**
 * An interface for classes that can browse relationships between people.
 */
class RelationshipBrowser
{
  public:
    /**
     * Returns a vector of pointers to all the children of the person with the given name.
     *
     * @param name The name of the person whose children should be found.
     * @return A vector of pointers to the children of the given person.
     */
    virtual std::vector<Person *> findAllChildrenOf(const std::string &name) = 0;
};

// Low-level module: Stores relationships in a vector of tuples and provides utility functions.
/**
 * A concrete implementation of the RelationshipBrowser interface that stores relationships
 * in a vector of tuples (person, relationship, person).
 */
class Relationships : public RelationshipBrowser
{
  public:
    /**
     * A vector of tuples representing the relationships between people.
     */
    std::vector<std::tuple<Person, Relationship, Person>> relations;

    /**
     * Adds a parent-child relationship between the given parents and child.
     *
     * @param parent The parent person.
     * @param child The child person.
     */
    void addParentAndChild(const Person &parent, const Person &child)
    {
        relations.push_back({parent, Relationship::parent, child});
        relations.push_back({child, Relationship::child, parent});
    }

    /**
     * Overrides the findAllChildrenOf() method of the RelationshipBrowser interface.
     *
     * Returns a vector of pointers to all the children of the person with the given name.
     *
     * @param name The name of the person whose children should be found.
     * @return A vector of pointers to the children of the given person.
     */
    std::vector<Person *> findAllChildrenOf(const std::string &name) override
    {
        std::vector<Person *> result;

        for (auto &[first, rel, second] : relations)
        {
            if (first.name == name && rel == Relationship::parent)
            {
                result.push_back(&second);
            }
        }
        return result;
    }

  private:
    std::unordered_map<std::string, std::vector<std::string>> relationships;
};

// High-level module: Uses the FamilyService to access and print relationships.

/**
 * Service class to facilitate access to relationship information through the
 * RelationshipBrowser interface.
 */
class FamilyService
{
  public:
    /**
     * Constructor receives a RelationshipBrowser object for dependency injection.
     *
     * @param browser The RelationshipBrowser object to use for accessing relationships.
     */
    FamilyService(RelationshipBrowser &browser) : _browser(browser)
    {
    }

    /**
     * Finds and returns the names of children for the given person's name.
     *
     * @param name The name of the person whose children should be found.
     * @return A vector of strings containing the names of the children.
     */
    std::vector<std::string> findChildrenOf(const std::string &name)
    {
        std::vector<std::string> children;
        for (auto &child : _browser.findAllChildrenOf(name))
        {
            children.push_back(child->name); // Access child's name through pointer
        }
        return children;
    }

  private:
    RelationshipBrowser &_browser;
};

/**
 * High-level module: Prints information about a person's children using the FamilyService.
 */
class Research
{
  public:
    /**
     * Constructor receives a FamilyService object and the name of the person to research.
     *
     * @param familyService The FamilyService object to use for accessing relationships.
     * @param name The name of the person to research.
     */
    Research(FamilyService &familyService, std::string name)
    {
        // Iterate through the children of the person and print their names
        for (const auto &child : familyService.findChildrenOf(name))
        {
            // Print the name of each child
            std::cout << name << " has a child called " << child << std::endl;
        }
    }

    // Destructor - Empty as there are no resources to deallocate
    ~Research()
    {
    }

    /*
     ** Alternative constructor that directly accesses relationships data (NOT RECOMMENDED) **

      This commented-out code demonstrates an alternative approach to finding children directly
      accessing the `Relationships` class's internal data. However, this approach violates
      the Dependency Inversion Principle (DIP) for the following reasons:

        1. **Tight coupling:** It tightly couples the `Research` class to the specific implementation
            of the `Relationships` class. Any changes to the `Relationships` class would require corresponding
            changes in `Research`.
        2. **Testing difficulty:** It makes testing harder because `Research` directly manipulates internal
            data, making it difficult to mock or isolate its behavior.
        3. **Reduced flexibility:** It reduces flexibility for future changes. If you need to change how
            relationships are stored or accessed, you'd need to modify both `Research` and `Relationships`.

        The preferred approach, as shown in the main constructor, is to inject an abstraction (`FamilyService`)
        through dependency injection. This promotes loose coupling, improves testability, and makes
        the code more adaptable to future changes.

         Research(Relationships &relationships)
        {
            // Access the relationships vector from the `relationships` object
            auto &relations = relationships.relations;
             // Iterate through the relationships, searching for the parent-child pair with "John" as the parent
             for (auto &&[first, rel, second] : relations)
             {
                   // Check if the first person is "John" and the relationship is "parent"
                 if (first.name == "John" && rel == Relationship::parent)
                 {
                     std::cout << "John has a child called " << second.name << std::endl;
                 }
             }
        }
    */
};

int main()
{
    // **Create person objects:**
    // - John is the parent of Chris and Matt.
    // - Greg is the parent of Dominic and Nicolas.
    Person parent{"John"};
    Person child1{"Chris"};
    Person child2{"Matt"};

    Person parent2{"Greg"};
    Person child3{"Dominic"};
    Person child4{"Nicolas"};

    // **Create a Relationships object to store relationships:**
    Relationships relationships;

    // **Add relationships to the Relationships object:**
    // - John is the parent of Chris and Matt.
    // - Greg is the parent of Dominic and Nicolas.
    relationships.addParentAndChild(parent, child1);
    relationships.addParentAndChild(parent, child2);
    relationships.addParentAndChild(parent2, child3);
    relationships.addParentAndChild(parent2, child4);

    // **Create a FamilyService object to access relationships:**
    // - Pass the Relationships object as an argument.
    FamilyService familyService(relationships);

    // **Create a Research object to explore relationships:**
    // - Pass the FamilyService object and the name of the person to research ("Greg").
    // - This will print the children of "Greg".
    Research exploreRelationships(familyService, "Greg");

    return 0;
}

```

Let's summarize what we did so far and how we demonstrate Dependency Inversion Principle (DIP) through a simple family relationship example.

We create objects representing people (Person) and their relationships (Relationships). The Relationships object stores connections between parents and children using names.

Instead of directly accessing Relationships data, we define a **FamilyService** class. This acts as an abstraction layer, allowing us to access relationships through methods like **findChildrenOf**.

The Research class depends on the **FamilyService** abstraction, injected during its creation. This decouples Research from specific data storage (like Relationships).

We create people, populate relationships, and create a FamilyService with the Relationships object. Finally, a Research instance investigates children of a specific person ("Greg") using the injected FamilyService.

We also achieve that **Research** doesn't depend on the internal implementation of Relationships, making it adaptable and testable. We can easily switch how relationships are stored (e.g., database) without impacting Research. Code becomes clearer and easier to understand with defined abstractions and responsibilities.

In this example, we showcase a fundamental DIP implementation, demonstrating its benefits for creating modular and adaptable software.

## 6. Summary - SOLID design principles for object-oriented programming.

So we talked about these solid design principles, let's try to summarize what we've learned.

---

1.  Single Responsibility Principle (SRP): Each class should have one purpose and reason to change.
2.  Separation of concerns - promoting independent modules and easier refactoring.
3.  Open-Closed Principle (OCP): Extend functionality through inheritance and object-oriented paradigms instead of modifying existing code.
4.  Liskov Substitution Principle (LSP): Subtypes should seamlessly replace base types without unexpected behavior.
5.  Interface Segregation Principle (ISP): Create smaller, focused interfaces to avoid forcing unnecessary method implementations.
6.  YAGNI (You Ain't Going to Need It): Interfaces shouldn't contain methods unlikely to be used, reducing implementation burden.
7.  Dependency Inversion Principle (DIP): High-level modules should depend on abstractions, not specifics, enabling flexible designs and easier testing.

---

This has been an amazing journey, showcasing the importance of SOLID Design Principles. Regardless of your preferred programming language (even beyond C++), these principles should always guide your planning, design, and implementation of programs, applications, and services.

While this code isn't a final version, there's definitely room for improvement. However, honestly, trying to tackle everything at once can be quite exhausting. There are many things I want to explore in the world of object-oriented programming, and the list is extensive but worth delving into. Starting with Builders and Bridge, then moving on to more advanced topics like Observer and Command, feels like a worthwhile endeavor. Mastering all of them would be an impressive achievement, and certainly no easy task.

P.S. For those who read until the end (around line 1145 in my markdown file), I have a small announcement to make. I'm planning to refresh the look of my current blog. I'm considering adding a chat feature or some other form of communication where we can connect and share information. Naturally, in 2024, it would be AI-powered, as that's become the standard. I might also include some questionnaires to gather your feedback.

If you found this blog helpful and would like to support my work, you can visit [BuyMeACoffee](https://www.buymeacoffee.com/grzegorzwolfinger).

![AI](ai.jpg)
