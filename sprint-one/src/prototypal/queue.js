var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
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