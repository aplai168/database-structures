var deps = ['chai',
            'mocha',
            'variant',
            'classPattern'];
define(deps, function(chai, notMocha, variant, classPattern){

  require(variant.pathFromFile('queue.js'));

  describe("queue", function() {
    var queue;
    var instantiator;

    if(variant.is('pseudoclassical')){
      instantiator = Queue;
      refreshQueue = function(){ queue = new Queue(); };
    } else {
      instantiator = makeQueue;
      refreshQueue = function(){ queue = makeQueue(); };
    }

    beforeEach(refreshQueue);

    it('should have "enqueue", "dequeue", and "size" methods', function() {
      expect(queue.enqueue).to.be.a('function');
      expect(queue.dequeue).to.be.a('function');
      expect(queue.size).to.be.a('function');
    });

    it('should not error when dequeuing from an empty queue', function() {
      expect(function(){queue.dequeue()}).not.throws();
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
      queue.dequeue(); // make sure we don't get to -1
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

    classPattern.ensure(instantiator).follows(variant.current);
  });
});