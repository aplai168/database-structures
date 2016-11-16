/* START SOLUTION */
//////////////////////////////////////////////////////////////////
// This file contains two distinct solutions:
//   - The solution presented in lecture
//   - Refactored version that makes use of higher-order functions
//
// The two solutions are delineated by comment blocks.
// To use the Higher-Order Function (HOF) version, uncomment the
// line of code near the end of this file.

//////////////////////////////////////////////////////////////////
// Implementation #1:
// Solution-Lecture implementation
//
// Notice how each function has a similar structure:
//   - calculate an index
//   - retreive an bucket at that location
//   - iterate over the bucket, and
//     - perform an action if the key is found
//   - otherwise perform a not-found action
//////////////////////////////////////////////////////////////////
/* END SOLUTION */

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
