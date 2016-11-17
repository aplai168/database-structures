var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.storageSize = 0;

  extend(someInstance, stackMaker);

  return someInstance;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMaker = {};

stackMaker.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

stackMaker.pop = function(value) {
  if (this.storageSize > 0) {
    this.storageSize--;
    result = this.storage[this.storageSize];
    delete this.storage[this.storageSize];
    return result;
  }
};

stackMaker.size = function() {
  return this.storageSize;
};
