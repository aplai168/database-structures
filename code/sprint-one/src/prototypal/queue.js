var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.tail = 0;
  someInstance.head = 0;
  someInstance.sizee = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(data) {
  this.storage[this.tail] = data;
  this.tail++;
};

queueMethods.dequeue = function() {
  //if theres data
  if (this.head <= this.tail) {
    var deletedHead = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return deletedHead;
  }
};

queueMethods.size = function() {
  this.sizee = this.tail - this.head;
  if (this.sizee < 0) {
    return 0
  }
  return this.sizee;
}
