# Sprint One: Object Oriented Programming
---
In this assignment, we'll implement and test two basic data structures:

### 1. [Queue]
A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (*FIFO*: first in, first out).

![queue image]

#### A queue would be great for....
Issuing instructions to your sandwich-making robot.

### 2. [Stack]
A stack works like a stack of plates -- plates are added and removed from the the top of the stack (*LIFO*: last in, first out).

![stack image]

#### A stack would be great for... Implementing your browser's back button.

## Goal
Implement both **stack** and **queue** data structures in each of four instantiation styles. The functional style is stubbed out in `src/functional/queue.js` and `src/functional/stack.js` to get you started.

## Requirements
- No arrays! Instead, use an object with numeric keys.
- Pass all the tests (open `SpecRunner.html` in a browser).

## Data Structure Specs
-  Implement a [stack] with the following methods:
    -  `push(string)` - Add a string to the top of the stack
    -  `pop()` - Remove and return the string on the top of the stack
    -  `size()` - Return the number of items on the stack

-  Implement a [queue] with the following methods:
    -  `enqueue(string)` - Add a string to the back of the queue
    -  `dequeue()` - Remove and return the string at the front of the queue
    -  `size()` - Return the number of items in the queue

## Instantiation Styles
1.  **Functional instantiation**: a simple "maker" pattern
    - *Do:*
        - Work within the `src/functional/` folder.
        - Define all functions and properties within the maker function.
    - *Don't:*
        - Use the keyword `new`, the keyword `this`, or any `prototype` chains.
        - Capitalize the maker function name.
    - *Example*: The provided classes `makeStack` and `makeQueue` already follow this pattern
2.  **Functional instantiation with shared methods**: same as step 1, but with shared methods
    - *Do:*
        - Work within the `src/functional-shared/` folder.
        - Create an object that holds the methods that will be shared by all instances of the class.
        - You'll need to use the keyword `this` in your methods.
        - Use [`_.extend`][_.extend] to copy the methods onto the instance.
    - *Don't:*
        - Use the keyword `new` or `prototype` chains
    - *Example*: [functional instantiation example]
3.  **Prototypal instantiation**: using `Object.create`
    - *Do:*
        - Work within the `src/protoypal/` folder.
        - Use [`Object.create`][Object.create] with the object from step 2 to create instances of your class
    - *Don't:*
        - Use the keyword `new`
    - *Example:* [prototypal instantiation example]
4.  **Pseudoclassical instantiation**: create instances with the keyword `new`
    - *Do:*
        - Work within the `src/pseudoclassical/` folder.
        - Capitalize your function name to indicate that it is intended to be run with the keyword `new`
        - Use the keyword `new` when instantiating your class
        - Use the keyword `this` in your constructor
    - *Don't:*
        - Declare the instance explicitly
        - Return the instance explicitly
    - *Example:* [pseudoclassical instantiation example]

## Extra credit

-  **Use the [Chrome profiling tools] to compare the performance of each instantiation pattern.**
    -  Create a profiling test case in each of your test suites.  It should instantiate and use a large number of stacks and queues.
    -  Comment out all but one test suite.  Record the results of the profiler.  Repeat for each step of the refactor.
    -  Write a brief analysis of your results.

# Sprint Two: Data Structures
---

This repo holds a mostly-empty [Jasmine](http://pivotal.github.com/jasmine/) test suite. To run it, open up `SpecRunner.html`.

Some failing specs are included. You're welcome! You should make them pass, then write more specs and more code.

## Your Goals:

### Implement and test the following classes:

### 1. [Linked List]

![Linked List image]

* A `linkedList` class, in functional style, with the following properties:
  - [ ] `.head` property, a `linkedListNode` instance
  - [ ] `.tail` property, a `linkedListNode` instance
  - [ ] `.addToTail()` method, takes a value and adds it to the end of the list
  - [ ] `.removeHead()` method, removes the first node from the list and returns its value
  - [ ] `.contains()` method, returns boolean reflecting whether or not the passed-in value is in the linked list


### 2. [Tree]

![Tree image]

* A `tree` class, in functional with shared methods style, with the following
  properties:
  - [ ] `.children` property, an array containing a number of subtrees
  - [ ] `.addChild()` method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
  - [ ] A `.contains()` method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node

### 3. [Set]

![Set image]

* A `set` class, in prototypal style, with the following properties:
  - [ ] An `.add()` method, takes any string and adds it to the set
  - [ ] A `.contains()` method, takes any string and returns a boolean reflecting whether it can be found in the set
  - [ ] A `.remove()` method, takes any string and removes it from the set, if present
  * **Note:** Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
  * **Note:** Until the extra credit section, your sets should handle only string values.

### 4. [Hash Table]

![Hash Table image]

- [ ] A `hashTable` class, in pseudoclassical style:
  * [ ] **First:** Play with each of the helper functions provided to get a sense of what they do.
    * You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
    * A `limitedArray` helper has been provided for you. Use it to store all inserted values. Try interacting with it from the console first.
  * Make the following properties appear on all instances:
    * [ ] An `.insert()` method
    * [ ] A `.retrieve()` method
    * [ ] A `.remove()` method

## APIs and Implementation: A Note on Communicating Your Intentions as a Developer

**tl;dr**: _prefix private properties and methods with an underscore_

APIs are more than just URLs that return data; **API** is a general term that refers to the visible surface of any system, object, or library with which your code interacts. E.g., an airplane has an API that consists of knobs, dials, pedals, and a steering wheel (?) which allow the pilot to make use of the airplane's underlying **implementation**--an engine, wings, and rudders. Importantly, the next model of airplane will probably have improvements to the engine, but the pilot need not know about this, as the controls will remain basically unchanged.

This relationship between APIs and implementations--that they remain independent--is what keeps the towering stacks of software we use everyday from falling over.

In JavaScript, because there is no concept of private variables (except through closure), sometimes API and implementation are both visible. If it's impossible to distinguish between API and implementation, you might depend upon a piece of implementation that later changes and breaks your code.

To prevent this from happening to your collaborators and consumers, indicate private properties and methods by prefixing them with an underscore. This is how we do.


## Extra Credit:

Write all of the following data structures and improvements in the order shown. Use any style you like.

* Extend your linked list to be [doubly linked](http://en.wikipedia.org/wiki/Doubly_linked_list), and add the
  following properties:
  - [ ] An `.addToHead()` method which takes a value and adds it to the end of the list.
  - [ ] A `.removeTail()` method which removes the last node from the list and returns its value.
  * Note: each `node` object will need to have a new `.previous` property pointing to the node behind it (or to `null`).
* Add parent links to your tree
  * [ ] A `.parent` property, which refers to the parent node or null when there is no node
  * [ ] A `.removeFromParent()` method, which disassociates the tree with its parent (in both directions)
* Implement a `binarySearchTree` class with the following properties:
  - [ ] A `.left` property, a binary search tree (BST) where all values are lower than than it the current value.
  - [ ] A `.right` property, a BST where all values are higher than than it the current value.
  - [ ] A `.insert()` method, which accepts a value and places in the tree in the correct position.
  - [ ] A `.contains()` method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  - [ ] A `.depthFirstLog()` method, which accepts a callback and executes it on every value contained in the tree.
  * Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.
- [ ] To prevent excessive collisions, make your `hashTable` double in size as soon as 75 percent of the spaces have been filled.
- [ ] To save space, make sure the `hashTable` shrinks when space usage falls below 25 percent.
- [ ] Implement a `.traverse()` method on your `tree`. Your `.traverse()` should accept a callback and execute it on every value contained in the tree.
- [ ] `.breadthFirstLog()` method for `binarySearchTee`, logs the nodes contained in the tree using a breadth-first approach.
- [ ] Make your `set` capable of handling numbers as well as strings.
- [ ] Make your `set` capable of handling input objects of any type.
- [ ] Make your `binarySearchTree` rebalance as soon as the max depth is more than twice the minimum depth.

## Nightmare Mode

- [ ] Write a `prefixTree` that can handle autocomplete for T9-style texting.
- [ ] Write a [b-tree](http://en.wikipedia.org/wiki/B-tree).
- [ ] Write a [red-black tree](http://en.wikipedia.org/wiki/Red%E2%80%93black_tree).
- [ ] Design a data structure that finds every English word that can be made from a given bag of Scrabble letters.
  * [ ] Optimize the algorithm and the data structure to return the set of words as quickly as possible.
  * Your priority for this task is to optimize for time complexity, but do try to avoid wasted space in your solution.
  * You can assume you have all the time required to do preprocessing on a dictionary of English words.





[functional instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeExtend.js
[prototypal instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePrototype.js
[pseudoclassical instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js

[stack image]: http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/200px-Data_stack.svg.png
[queue image]: http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/200px-Data_Queue.svg.png
[stack]: http://en.wikipedia.org/wiki/Stack_(abstract_data_type)
[queue]: http://en.wikipedia.org/wiki/Queue_(abstract_data_type)
[Array]: http://mdn.io/Array
[Array methods]: http://mdn.io/Array#Methods_of_Array_instances
[Object.create]: http://mdn.io/Object.create
[_.extend]: http://underscorejs.org/#extend
[Jasmine]: http://pivotal.github.com/jasmine/
[Chrome profiling tools]: https://developers.google.com/chrome-developer-tools/docs/profiles

[Linked List]: https://en.wikipedia.org/wiki/Linked_list
[Linked List image]: https://f.cloud.github.com/assets/1577682/1212239/43154574-2615-11e3-8e29-43cf74e25b10.png
[Set]: https://en.wikipedia.org/wiki/Set_data_structure
[Set image]: http://www.codeproject.com/KB/recipes/DotNetSet/Sets02.png
[Tree]: https://en.wikipedia.org/wiki/Tree_(data_structure)
[Tree Image]: http://www.urgenthomework.com/images/ternary-and-quaternary-tree.gif
[Hash Table]: https://en.wikipedia.org/wiki/Hash_tables
[Hash Table image]: https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg
