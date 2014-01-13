var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  /* START SOLUTION */
  var instance = Object.create(queueMethods);

  instance._storage = {};
  instance._start = -1;
  instance._end = -1;

  return instance;
  /* END SOLUTION */
};

var queueMethods = {};

/* START SOLUTION */
queueMethods.enqueue = function(value){
  this._end++;
  this._storage[this._end] = value;
};

queueMethods.dequeue = function(){
  this.size() && this._start++;
  var result = this._storage[this._start];

  delete this._storage[this._start];

  return result;
};

queueMethods.size = function(){
  return this._end - this._start;
};
/* END SOLUTION */