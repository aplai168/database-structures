var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.a = 0;
  someInstance.storage = {};
  return someInstance;
};

stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.a] = value;
  this.a++;
};

stackMethods.pop = function() {
  var result;
  if (this.a > 0) {
    this.a--;
    result = this.storage[this.a];
    delete this.storage[this.a];
    return result;
  }
};

stackMethods.size = function() {
  if (this.a < 0) {
    return 0;
  } else {
    return this.a;
  }
};
