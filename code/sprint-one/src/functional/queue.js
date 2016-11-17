var Queue = function() {
  var someInstance = {};
//priority order?
  // Use an object with numeric keys to store values
  var head = 0;
  var tail = 0;
  var size = 0;
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    var first = storage[head];
    delete storage[head];
    head++;
    return first;
  };

  someInstance.size = function() {
    size = tail - head;
    if (size < 0) {
      return 0;
    } else {
      return size;
    }
  };

  return someInstance;
};
