var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  /* START SOLUTION */
  var instance = {};
  _(instance).extend(stackMethods);

  instance._storage = {};
  instance._size = 0;

  return instance;
  /* END SOLUTION */
};
  
var stackMethods = {};

/* START SOLUTION */
stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function(){
  this._size && this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};

stackMethods.size = function(){
  return this._size;
};
/* END SOLUTION */