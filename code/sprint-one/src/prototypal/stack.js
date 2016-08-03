var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  /* START SOLUTION */
  var someInstance = Object.create(stackMethods);

  someInstance._storage = {};
  someInstance._size = 0;

  return someInstance;
  /* END SOLUTION */
};

var stackMethods = {};

/* START SOLUTION */
stackMethods.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

stackMethods.size = function() {
  return this._size;
};
/* END SOLUTION */
