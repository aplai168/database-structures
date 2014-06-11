var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  /* START SOLUTION */
  set._storage = {};
  /* END SOLUTION */
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  /* START SOLUTION */
  this._storage[item] = true;
  /* END SOLUTION */
};

setPrototype.contains = function(item){
  /* START SOLUTION */
  return !!this._storage[item];
  /* END SOLUTION */
};

setPrototype.remove = function(item){
  /* START SOLUTION */
  delete this._storage[item];
  /* END SOLUTION */
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
