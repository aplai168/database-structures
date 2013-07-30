describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('should not error when dequeuing from an empty queue', function() {
    expect(queue.dequeue).not.throws();
  });

  it('should report its size correctly', function() {
    var a = 'a', b = 'b', c = 'c';

    queue.enqueue(a);
    queue.enqueue(b);
    queue.enqueue(c);
    expect(queue.size()).equal(3);

    queue.dequeue();
    expect(queue.size()).equal(2);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).equal(0);
  });

  it('should dequeue items in the FIFO order', function() {
    var a = 'a', b = 'b', c = 'c', d = 'd';

    queue.enqueue(a);
    queue.enqueue(b);
    queue.enqueue(c);
    expect(queue.dequeue()).equal(a);
    expect(queue.dequeue()).equal(b);

    queue.enqueue(d);
    expect(queue.dequeue()).equal(c);
    expect(queue.dequeue()).equal(d);
  });
});
