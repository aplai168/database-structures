# More Data Structures

This repo holds a mostly-empty [Jasmine](http://pivotal.github.com/jasmine/)
test suite. To run it, open up `SpecRunner.html`.

Some failing specs are included. You're welcome! You should make them pass,
then write more specs and more code.

## Your Goals:

### Implement and test the following classes:

* A `linkedList` class, in functional style, with the following properties:
  - [ ] `.head` property, a `linkedListNode` instance
  - [ ] `.tail` property, a `linkedListNode` instance
  - [ ] `.addToTail()` method, takes a value and adds it to the end of the list
  - [ ] `.removeHead()` method, removes the first node from the list and returns its
    value
  - [ ] `.contains()` method, returns boolean reflecting whether or not the
    passed-in value is in the linked list

* A `tree` class, in functional with shared methods style, with the following
  properties:
  - [ ] `.children` property, an array containing a number of subtrees
  - [ ] `.addChild()` method, takes any value, sets that as the target of a node,
    and adds that node as a child of the tree
  - [ ] A `.contains()` method, takes any input and returns a boolean reflecting
    whether it can be found as the value of the target node or any descendant
node
* A `set` class, in prototypal style, with the following properties:
  - [ ] An `.add()` method, takes any stringand adds it to the set
  - [ ] A `.contains()` method, takes any string and returns a boolean reflecting
    whether it can be found in the set
  - [ ] A `.remove()` method, takes any string and removes it from the set, if
    present
  * **Note:** Sets should not use up any more space than necessary. Once a value
    is added to a set, adding it a second time should not increase the size of
    the set.
  * **Note:** Until the extra credit section, your sets should handle only
    string values.
- [ ] A `hashTable` class, in pseudoclassical style:
  * [ ] **First:** Play with each of the helper functions provided to get a sense of
    what they do.
    * You will use the provided hash function to convert any key into an array
      index. Try interacting with it from the console first.
    * A `limitedArray` helper has been provided for you. Use it to store all
      inserted values. Try interacting with it from the console first.
  * Make the following properties appear on all instances:
    * [ ] An `.insert()` method
    * [ ] A `.retrieve()` method
    * [ ] A `.remove()` method
  * [ ] Once you have a working, naive hash table, make sure it handles collisions
    correctly. Test this by reducing the size limit for storage to 1 and seeing
    if the hash table can keep track of 2 different key-value pairs.

## Extra Credit:

Write all of the following data structures and improvements in the order shown.
Use any style you like.

* Extend your linked list to be [doubly linked](http://en.wikipedia.org/wiki/Doubly_linked_list/), and add the
  following properties:
  - [ ] An `.addToHead()` method which takes a value and adds it to the end of the
    list.
  - [ ] A `.removeTail()` method which removes the last node from the list and
    returns its value.
  * Note: each `node` object will need to have a new `.previous` property
    pointing to the node behind it (or to `null`).
* Add parent links to your tree
  * [ ] A `.parent` property, which refers to the parent node or null when there is no node
  * [ ] A `.removeFromParent()` method, which disassociates the tree with its parent (in both directions)
* Implement a `binarySearchTree` class with the following properties:
  - [ ] A `.left` property, a binary search tree (BST) where all values are lower
    than than it the current value.
  - [ ] A `.right` property, a BST where all values are higher than than it the
    current value.
  - [ ] A `.insert()` method, which accepts a value and places in the tree in the
    correct position.
  - [ ] A `.contains()` method, which accepts a value and returns a boolean
    reflecting whether or not the value is contained in the tree.
  - [ ] A `.depthFirstLog()` method, which accepts a callback and executes it on
    every value contained in the tree.
  * Use case: Given a list of a million numbers, write a function that takes a
    new number and returns the closest number in the list using your BST.
    Profile this against the same operation using an array.
- [ ] To prevent excessive collisions, make your `hashTable` double in size as soon
  as 75 percent of the spaces have been filled.
- [ ] To save space, make sure the `hashTable` shrinks when space usage falls below
  25 percent.
- [ ] Implement a `.traverse()` method on your `tree`. Your `.traverse()` should
  accept a callback and execute it on every value contained in the tree.
- [ ] `.breadthFirstLog()` method for `binarySearchTee`, logs the nodes contained in
  the tree using a breadth-first approach.
- [ ] Make your `set` capable of handling numbers as well as strings.
- [ ] Make your `set` capable of handling input objects of any type.
- [ ] Make your `binarySearchTree` rebalance as soon as the max depth is more than
  twice the minimum depth.

## Nightmare Mode

- [ ] Write a `prefixTree` that can handle autocomplete for T9-style texting.
- [ ] Write a [b-tree](http://en.wikipedia.org/wiki/B-tree).
- [ ] Write a [red-black tree](http://en.wikipedia.org/wiki/Red%E2%80%93black_tree).
- [ ] Design a data structure that finds every English word that can be made from a
  given bag of Scrabble letters.
  * [ ] Optimize the algorithm and the data structure to return the set of words as
    quickly as possible.
  * Your priority for this task is to optimize for time complexity, but do try
    to avoid wasted space in your solution.
  * You can assume you have all the time required to do preprocessing on a
    dictionary of English words.
