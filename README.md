# Data Structures

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

## Requirements
- Implement a **stack** class and a **queue** class
- Throughly test the functionality of your data structures.
- Don't use an array to store the data for either implementation. Instead, use an object with numeric keys.
    * The native [`Array`][Array] has [built-in methods][Array methods] that allow it to function as a stack or queue, which would defeat the purpose of the assignment.

## Tasks

- [ ] **Run the (mostly empty) test suite**
    - This repo contains a mostly empty [Jasmine] test suite.  To run it, open up `SpecRunner.html`.

- [ ] **Implement and test a [stack] data structure with the following methods:**
    - [ ] `push(string)` - Add a string to the top of the stack
    - [ ] `pop()` - Remove and return the string on the top of the stack
    - [ ] `size()` - Return the number of items on the stack

- [ ] **Implement and test a [queue] data structure with the following methods:**
    - [ ] `enqueue(string)` - Add a string to the back of the queue
    - [ ] `dequeue()` - Remove and return the string at the front of the queue
    - [ ] `size()` - Return the number of items in the queue

- [ ] **Refactor your data structures to use the following methods of instantiation:**
    1. [x] **Functional instantiation**: a simple "maker" pattern
        - *Do:*
            - Work within the `src/functional/` folder.
            - Define all functions and properties within the maker function.
        - *Don't:*
            - Use the keyword `new`, the keyword `this`, or any `prototype` chains.
            - Capitalize the maker function name.
        - *Example*: The provided classes `makeStack` and `makeQueue` already follow this pattern
    2. [ ] **Functional instantiation with shared methods**: same as step 1, but with shared methods
        - *Do:*
            - Work within the `src/functional-shared/` folder.
            - Create an object that holds the methods that will be shared by all instances of the class.
            - You'll need to use the keyword `this` in your methods.
            - Use [`_.extend`][_.extend] to copy the methods onto the instance.
        - *Don't:*
            - Use the keyword `new` or `prototype` chains
        - *Example*: [functional instantiation example]
    3. [ ] **Prototypal instantiation**: using `Object.create`
        - *Do:*
            - Work within the `src/protoypal/` folder.
            - Use [`Object.create`][Object.create] with the object from step 2 to create instances of your class
        - *Don't:*
            - Use the keyword `new`
        - *Example:* [prototypal instantiation example]
    4. [ ] **Pseudoclassical instantiation**: create instances with the keyword `new`
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

- [ ] **Use the [Chrome profiling tools] to compare the performance of each instantiation pattern.**
  - [ ] Create a profiling test case in each of your test suites.  It should instantiate and use a large number of stacks and queues.
  - [ ] Comment out all but one test suite.  Record the results of the profiler.  Repeat for each step of the refactor.
  - [ ] Write a brief analysis of your results.

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
