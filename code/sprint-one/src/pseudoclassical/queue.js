var Queue = function() {
  this.tail = 0;
  this.head = 0;
  this.sizee = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(data) {
  this.storage[this.tail] = data;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  if(this.head < this.tail) {
    var deletedHead = this.storage[this.head];
    this.head++;
    return deletedHead;
  }
};

Queue.prototype.size = function() {
  this.sizee = this.tail - this.head;
  if (this.sizee < 0) {
    return 0;
  }
  return this.sizee;
};
