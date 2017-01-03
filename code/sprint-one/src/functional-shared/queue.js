var Queue = function() {
  var someInstance = {};
  someInstance.sizee = 0;
  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.storage = {};

  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

queueMethods = {};

queueMethods.enqueue = function(data) {
  //store data at the tail end and then add tail index
  this.storage[this.tail] = data;
  this.tail++;
};

queueMethods.dequeue = function() {
  if (this.head <= this.tail) {
    //delete head
    var deletedHead = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return deletedHead;
  }
};

queueMethods.size = function() {
  this.sizee = this.tail - this.head;
  if(this.sizee < 0) return 0;
  return this.sizee;
};
