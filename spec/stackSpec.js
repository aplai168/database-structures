describe("stack", function() {
  var stack;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should not error when popping from an empty stack', function() {
    expect(stack.pop).not.throws();
  });

  it('should report its size correctly', function() {
    var a = 'a', b = 'b', c = 'c';

    stack.push(a);
    stack.push(b);
    stack.push(c);
    expect(stack.size()).equal(3);

    stack.pop();
    expect(stack.size()).equal(2);

    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.size()).equal(0);
  });

  it('should pop items in the LIFO order', function() {
    var a = 'a', b = 'b', c = 'c', d = 'd';

    stack.push(a);
    stack.push(b);
    stack.push(c);
    expect(stack.pop()).equal(c);
    expect(stack.pop()).equal(b);

    stack.push(d);
    expect(stack.pop()).equal(d);
    expect(stack.pop()).equal(a);
  });
});
