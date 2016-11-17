var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.a = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.storage[this.a] = value;
  this.a++;
};

Stack.prototype.pop = function() {
  if (this.a > 0) {
    this.a--;
    var result = this.storage[this.a];
    delete this.storage[this.a];
    return result;
  }
};
Stack.prototype.size = function() {
  return this.a;
};
