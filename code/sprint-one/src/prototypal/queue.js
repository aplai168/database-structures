var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.a = 0;
  someInstance.head = 0;
  someInstance.tail = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  if (this.head < this.tail) {
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
};

queueMethods.size = function() {
  this.a = this.tail - this.head;
  if (this.a < 0) {
    return 0;
  } else {
    return this.a;
  }
};
