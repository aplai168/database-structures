var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  /* START SOLUTION */
  newTree.children = [];
  _.extend(newTree, treeMethods);
  /* ELSE
  // your code here
  newTree.children = null;  // fix me
  END SOLUTION */

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  /* START SOLUTION */
  var child = Tree(value);
  this.children.push(child);
  /* END SOLUTION */
};

treeMethods.contains = function(target) {
  /* START SOLUTION */
  if ( this.value === target ) {
    return true;
  }
  for ( var i = 0; i < this.children.length; i++ ) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
  /* END SOLUTION */
};

/* START SOLUTION */
treeMethods.traverse = function(callback) {
  callback(this.value);

  if (!this.children) { return; }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(callback);
  }
};
/* END SOLUTION */

/*
 * Complexity: What is the time complexity of the above functions?
 */
