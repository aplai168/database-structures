# Sprint One: Object-Oriented Programming
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

#### A stack would be great for...
Implementing your browser's back button.

## Goal
Implement both **stack** and **queue** data structures in each of four instantiation styles. The functional style is stubbed out in `src/functional/queue.js` and `src/functional/stack.js` to get you started.

## Requirements
- No arrays! Instead, use an object with numeric keys
- Pass all the tests (open `SpecRunner.html` in a browser to see which tests are passing)

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
        - Work within the `src/functional/` folder
        - Define all functions and properties within the maker function
    - *Don't:*
        - Use the keyword `new`, the keyword `this`, or any `prototype` chains
        - Capitalize the maker function name
    - *Example*: The provided classes `Stack` and `Queue` already follow this pattern
2.  **Functional instantiation with shared methods**: same as step 1, but with shared methods
    - *Do:*
        - Work within the `src/functional-shared/` folder
        - Create an object that holds the methods that will be shared by all instances of the class
        - Use the keyword `this` in your methods
        - Use [`_.extend`][_.extend] to copy the methods onto the instance
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
        - Work within the `src/pseudoclassical/` folder
        - Capitalize your function name to indicate to others that it is intended to be run with the keyword `new`
        - Use the keyword `new` when instantiating your class
        - Use the keyword `this` in your constructor
    - *Don't:*
        - Declare the instance explicitly
        - Return the instance explicitly
    - *Example:* [pseudoclassical instantiation example]

## Extra credit

-  **Use the [Chrome profiling tools] to compare the performance of each instantiation pattern.**
    -  Create a new HTML page with your data structures and an additional profiling script.  It should instantiate and use a large number of stacks and queues
    -  Reload the page with the CPU profiler running to investigate the runtime of your functions
    -  Take a heap snapshot to investigate object allocations and memory use
    -  Optionally, reload the page with the heap profiler running to investigate garbage collection behavior
    -  Do this for each of the instantiation styles, record, and compare the results. Write a brief analysis

# Sprint Two: Data Structures
---

This repo holds a mostly-empty [Mocha](http://visionmedia.github.io/mocha/) test suite. To run it, open up `SpecRunner.html`.

Some failing specs are included. You're welcome! You should make them pass, then write more specs and more code.

## Your Goals:

### Implement and test the following classes:

### 1. [Linked List]
A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to
an array which on average has linear time insertion and removal operations).
In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time
operation of traversing the entire linked-list from the beginning.

![Linked List image]

#### A linked list would be great for....
An itinerary you expect to add and remove destinations to and from.

* A `linkedList` class, in functional style, with the following properties:
  - [ ] `.head` property, a `linkedListNode` instance
  - [ ] `.tail` property, a `linkedListNode` instance
  - [ ] `.addToTail()` method, takes a value and adds it to the end of the list
  - [ ] `.removeHead()` method, removes the first node from the list and returns its value
  - [ ] `.contains()` method, returns boolean reflecting whether or not the passed-in value is in the linked list
  - [ ] What is the time complexity of the above functions?

### 2. [Tree]
A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with
(potential) children. For this reason the tree is referred to as a recursive data structure.

![Tree image]

#### A tree would be great for....
Making a family tree.

* A `tree` class, in functional with shared methods style, with the following
  properties:
  - [ ] `.children` property, an array containing a number of subtrees
  - [ ] `.addChild()` method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
  - [ ] A `.contains()` method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  - [ ] What is the time complexity of the above functions?

### 3. [Graph]
Graphs consists of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily
hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed,
which means there is an asymmetrical relationship between nodes that are connected by an edge. You will be implementing an undirected graph.

![Graph image]

#### A graph would be great for....
Representing how a collection of websites (or the entire world wide web) link to each other.

* Implement a `graph` class, in pseudoclassical style, with the following properties:
  - [ ] It is an undirected graph.  It does not have to be 'connected'.
  - [ ] An `.addNode()` method that takes a new node and adds it to the graph
  - [ ] A `.contains()` method that takes any node and returns a boolean reflecting whether it can be found in the graph
  - [ ] A `.removeNode()` method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
  - [ ] An `.addEdge()` method that creates a edge (connection) between two nodes if they both are present within the graph
  - [ ] A `.hasEdge()` method that returns a boolean reflecting whether or not two nodes are connected
  - [ ] A `.removeEdge()` method that removes the connection between two nodes
  - [ ] A `.forEachNode()` method that traverses through the graph, calling a passed in function once on each node
  - [ ] What is the time complexity of the above functions?

### 4. [Set]
Sets contain unique values in no particular order.

![Set image]

#### A set would be great for....
A raffle, where all the tickets are unique and you just want to randomly pick one (or several) out of them all.

* A `set` class, in prototypal style, with the following properties:
  - [ ] An `.add()` method, takes any string and adds it to the set
  - [ ] A `.contains()` method, takes any string and returns a boolean reflecting whether it can be found in the set
  - [ ] A `.remove()` method, takes any string and removes it from the set, if present
  - [ ] What is the time complexity of the above functions?
  * **Note:** Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
  * **Note:** Until the extra credit section, your sets should handle only string values.
  * **Note:** This is a rather simple data structure. Take a look at the [Wikipedia](http://en.wikipedia.org/wiki/Set_(computer_science)) entry. Which native Javascript type fits the requirements best?

### 5. [Hash Table]
Hash tables (sometimes called hash maps) store key value pairs. They do so in a memory efficient way by using a 'hashing function' that translates keys into 
numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size 
in memory when necessary, and reduce their size in memory when possible.

![Hash Table image]

#### A hash table would be great for....
A contact list you might add or remove contacts from over time.

- [ ] A `hashTable` class, in pseudoclassical style:
  * [ ] **First:** Play with each of the helper functions provided to get a sense of what they do.
    * You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
    * A `limitedArray` helper has been provided for you. Use it to store all inserted values. Try interacting with it from the console first.
  * Make the following properties appear on all instances:
    * [ ] An `.insert()` method
    * [ ] A `.retrieve()` method
    * [ ] A `.remove()` method
  - [ ] What is the time complexity of the above functions?
- [ ] Using your understanding of hash tables, refactor your set implementation from above to run in constant time

**On Objects and Hash Tables:** An astute hacker might find themself wondering "Is it not so that a JavaScript object is a hash table?" or even further, "Why would I ever need to create a hash table in JavaScript?" While it is true that objects and hash tables are functionally similar, knowing how a hash table works is hugely important as they are an incredibly useful and fundamental data structure. To have detailed knowledge of how a hash table is constructed will give you valuable insight on your path to code mastery. Additionally, other languages might not provide the convenience of JavaScript's object class, meaning you may someday have to put your hash table construction abilities to good use.

**Interesting Aside: JavaScript objects aren't necessarily backed by hash tables. Despite the similarities, the [ECMA-262](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf) standard makes no restrictions on how JavaScript objects are implmented. The [V8 JavaScript engine](https://developers.google.com/v8/design?hl=sv&csw=1#prop_access), which is used in Chrome, implements objects in a way that is significantly faster than using a hash table.


### 6. [Binary Search Tree]

![Binary Search Tree image]

* Implement a `binarySearchTree` class with the following properties:
  - [ ] A `.left` property, a binary search tree (BST) where all values are lower than than it the current value.
  - [ ] A `.right` property, a BST where all values are higher than than it the current value.
  - [ ] A `.insert()` method, which accepts a value and places in the tree in the correct position.
  - [ ] A `.contains()` method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  - [ ] A `.depthFirstLog()` method, which accepts a callback and executes it on every value contained in the tree.
  - [ ] What is the time complexity of the above functions?
  * Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.



## APIs and Implementation: A Note on Communicating Your Intentions as a Developer

**tl;dr**: _prefix private properties and methods with an underscore_

APIs are more than just URLs that return data; **API** is a general term that refers to the visible surface of any system, object, or library with which your code interacts. E.g., an airplane has an API that consists of knobs, dials, pedals, and a yoke which allow the pilot to make use of the airplane's underlying **implementation**--an engine, wings, and rudders. Importantly, the next model of airplane will probably have improvements to the engine, but the pilot need not know about this, as the controls will remain basically unchanged.

This relationship between APIs and implementations--that they remain independent--is what keeps the towering stacks of software we use everyday from falling over.

In JavaScript, because there is no concept of private variables (except through closure), sometimes API and implementation are both visible. If it's impossible to distinguish between API and implementation, you might depend upon a piece of implementation that later changes and breaks your code.

To prevent this from happening to your collaborators and consumers, indicate private properties and methods by prefixing them with an underscore. This is how we do.


## Extra Credit

**Note**: _Prompts have varying levels of difficulty. In order to decide how to allocate your time, please review all of them before starting._

Write all of the following data structures and improvements in the order shown. Use any style you like.

* Create a [`doubly-linked-list`][doubly-linked-list], with all the methods of
  your linked list, and add the following properties:
  - [ ] An `.addToHead()` method which takes a value and adds it to the front of the list.
  - [ ] A `.removeTail()` method which removes the last node from the list and returns its value.
  * Note: each `node` object will need to have a new `.previous` property pointing to the node behind it (or to `null` when appropriate);
    this is what makes it a doubly-linked list.
* Add parent links to your `tree`
  * [ ] A `.parent` property, which refers to the parent node or null when there is no node
  * [ ] A `.removeFromParent()` method, which disassociates the tree with its parent (in both directions)

- [ ] To prevent excessive collisions, make your `hashTable` double in size as soon as 75 percent of the spaces have been filled
- [ ] To save space, make sure the `hashTable` halves in size when space usage falls below 25 percent
- [ ] Implement a `.traverse()` method on your `tree`. Your `.traverse()` should accept a callback and execute it on every value contained in the tree
- [ ] `.breadthFirstLog()` method for `binarySearchTee`, logs the nodes contained in the tree using a breadth-first approach
- [ ] Make your `set` capable of handling numbers as well as strings
- [ ] Make your `set` capable of handling input objects of any type
- [ ] Make your `binarySearchTree` rebalance as soon as the max depth is more than twice the minimum depth

* Implement a `bloomFilter`:
  - [ ] Read the [Wikipedia article about Bloom Filters](http://en.wikipedia.org/wiki/Bloom_filter) and/or [BillMill.org](http://billmill.org)'s [Bloom Filters by Example](http://billmill.org/bloomfilter-tutorial/). tl;dr: It's a probabalistic hash table that can gain enormous space and speed advantages over traditional hash tables. Downside is it has to accept a false positive rate when looking up whether an item is in the table. Use cases are often for checking against a giant list locally and only doing a full lookup when the local one comes back positive. You may find [this](http://billmill.org/bloomfilter-tutorial/) tutorial useful.
  - [ ] Create an "m=18, k=3" bloom filter. This means 18 slots, with 3 hash functions.
  - [ ] Run a small loop that runs 10,000 trials of trying to retreive a mix of items that are in the filter and not in the filter.
  - [ ] Record the empirical rate of false-positives by comparing your result with what you know to be true from the inputs you selected.
  - [ ] Compare that rate with the approximation given for Bloom filters, which is approximated as `(1- e^(-kn/m))^k`

## Nightmare Mode

- [ ] Write a [`prefixTree`][prefixTree] that can handle autocomplete for T9-style texting
- [ ] Write a [`bTree`][bTree]
- [ ] Write a [`redBlackTree`][redBlackTree]
- [ ] Design a data structure that finds every English word that can be made from a given bag of Scrabble letters
  * [ ] Optimize the algorithm and the data structure to return the set of words as quickly as possible
  * Your priority for this task is to optimize for time complexity, but do try to avoid wasted space in your solution
  * You can assume you have all the time required to do preprocessing on a dictionary of English words

## Resources

- [Data structure coverage in Wikipedia](https://en.wikipedia.org/wiki/Data_structure) is no joke. Consider heading to Wikipedia when you have questions about data structures you are working with, or want to start learning about new ones.
- [VisuAlgo](http://visualgo.net/) is an incredible sight with clean visualizations of all kinds of data structures and algorithms.
- Hack Reactor graduate Ryan Atkinson's excellent blog post [JavaScript Classes and Instantiation Patterns](http://www.ryanatkinson.io/javascript-instantiation-patterns/)




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
[Mocha]: http://visionmedia.github.io/mocha/
[Chrome profiling tools]: https://developers.google.com/chrome-developer-tools/docs/profiles

[Linked List]: https://en.wikipedia.org/wiki/Linked_list
[Linked List image]: https://f.cloud.github.com/assets/1577682/1212239/43154574-2615-11e3-8e29-43cf74e25b10.png
[doubly-linked-list]: http://en.wikipedia.org/wiki/Doubly_linked_list
[Set]: https://en.wikipedia.org/wiki/Set_data_structure
[Set image]: http://www.codeproject.com/KB/recipes/DotNetSet/Sets02.png
[Tree]: https://en.wikipedia.org/wiki/Tree_(data_structure)
[Tree Image]: http://www.urgenthomework.com/images/ternary-and-quaternary-tree.gif
[Binary Search Tree]: http://en.wikipedia.org/wiki/Binary_search_tree
[Binary Search Tree Image]: http://i.imgur.com/eDw57vR.png
[Graph]: http://en.wikipedia.org/wiki/Graph_(mathematics)
[Graph image]: http://i.imgur.com/PlN2VGG.png
[Hash Table]: https://en.wikipedia.org/wiki/Hash_tables
[Hash Table image]: https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg
[bTree]: http://en.wikipedia.org/wiki/B-tree
[redBlackTree]: http://en.wikipedia.org/wiki/Red%E2%80%93black_tree
prefixTree]: https://en.wikipedia.org/wiki/Trie
