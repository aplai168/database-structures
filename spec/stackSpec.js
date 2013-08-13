var deps = ['mocha',
            'chai',
            'variant',
            'classPattern'];
define(deps, function(notMocha, chai, variant, classPattern){

  require(variant.pathFromFile('stack.js'));

  describe("stack", function() {
    var stack;
    var instantiator;
    var refreshStack;

    if(variant.is('pseudoclassical')){
      instantiator = Stack;
      refreshStack = function(){ stack = new Stack(); }
    } else {
      instantiator = makeStack;
      refreshStack = function(){ stack = makeStack(); };
    }

    beforeEach(refreshStack);

    it('has "push", "pop", and "size" methods', function() {
      expect(stack.push).to.be.a('function');
      expect(stack.pop).to.be.a('function');
      expect(stack.size).to.be.a('function');
    });

    it('does not error when popping from an empty stack', function() {
      expect(function(){stack.pop()}).not.throws();
    });

    it('reports a size of zero for a new stack', function() {
      expect(stack.size()).equal(0);
    });

    it('reports a size of 2 after pushing twice', function() {
      stack.push('a');
      stack.push('b');
      expect(stack.size()).equal(2);
    });

    it('reports a size of 1 after pushing twice and removing once', function() {
      stack.push('a');
      stack.push('b');
      stack.pop();
      expect(stack.size()).equal(1);
    });

    it('reports a size of 0 after removing more items than were added', function() {
      stack.push('a');
      stack.pop();
      stack.pop();
      expect(stack.size()).equal(0);
    });

    it('allows repeated pushing and popping of items', function() {
      stack.push('a');
      expect(stack.pop()).equal('a');
      stack.push('b');
      expect(stack.pop()).equal('b');
    });

    it('pops the oldest item, after newer items have already been pushed and popped', function() {
      stack.push('a');
      stack.push('b');
      expect(stack.pop()).equal('b');

      stack.push('c');
      expect(stack.pop()).equal('c');
      expect(stack.pop()).equal('a');
    });

    classPattern.ensure(instantiator).follows(variant.current);
  });
});
