var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
/* START SOLUTION */
  this._storage = {};
  this._start = -1;
  this._end = -1;
/* END SOLUTION */
};

/* START SOLUTION */
Queue.prototype.enqueue = function(value){
  this._end++;
  this._storage[this._end] = value;
};

Queue.prototype.dequeue = function(){
  this.size() && this._start++;
  var result = this._storage[this._start];
  delete this._storage[this._start];
  return result;
};

Queue.prototype.size = function(){
  return this._end - this._start;
};
/* END SOLUTION */
