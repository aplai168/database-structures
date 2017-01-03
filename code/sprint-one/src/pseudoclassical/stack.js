var Stack = function() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function(data) {
  //increase size and store
  this._storage[this._size] = data;
  this._size++;
};

Stack.prototype.pop = function() {
  //decrease size and delete stored data
  this._size--;
  var deletedData = this._storage[this._size];
  delete this._storage[this._size];
  return deletedData;
};

Stack.prototype.size = function() {
  if(this._size < 0) {
    return 0;
  }
  return this._size;
};
