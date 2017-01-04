var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  var deletedData = this._storage[item];
  delete this._storage[item];
  return deletedData;
};

/*
 * Complexity: What is the time complexity of the above functions?
 They should all be constant time because there is no need to loop. 
 */
