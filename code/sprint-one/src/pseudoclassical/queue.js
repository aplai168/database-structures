var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.a = 0;
  this.storage = {};
  this.tail = 0;
  this.head = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  if (this.head < this.tail) {
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
};

Queue.prototype.size = function() {
  this.a = this.tail - this.head;
  if (this.a < 0) {
    return 0;
  } else {
    return this.a;
  }
};
