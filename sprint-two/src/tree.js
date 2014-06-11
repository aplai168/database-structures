var makeTree = function(value){
  var newTree = {};
  newTree.value = value;

  /* START SOLUTION */
  extend(newTree, treeMethods);
  newTree.children = [];
  /* ELSE
  // your code...
  newTree.children;  // fix me
  END SOLUTION */

  return newTree;
};


/* START SOLUTION */
var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};
/* END SOLUTION */


var treeMethods = {};

treeMethods.addChild = function(value){
/* START SOLUTION */
  var child = makeTree(value);
  this.children.push(child);
/* END SOLUTION */
};

treeMethods.contains = function(target){
/* START SOLUTION */
  var found = false;
  var subroutine = function(node){
    if ( node.value === target ){
      found = true;
      return;
    }
    for ( var i = 0; i < node.children.length; i++ ){
      var child = node.children[i];
      subroutine(child);
    }
  }
  subroutine(this);
  return found;
/* END SOLUTION */
};
/* START SOLUTION */
treeMethods.traverse = function(callback){
  callback(this.value);

  if ( !this.children ){ return; }
  for ( var i = 0; i < this.children.length; i++ ){
    var child = this.children[i];
    debugger;
    child.traverse(callback);
  }
};
/* END SOLUTION */

/*
 * Complexity: What is the time complexity of the above functions?
 */
