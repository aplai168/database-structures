/* START SOLUTION */
/*
 * Note:  This solution can be refactored to provide improved performance.  How might you do that?
 *        Consider the Time Complexity of removing edges.  After you review this solution, consider
 *        how you might redefine your graph implementation to make it faster.
 *
 *        When you're ready, an alternate implementation follows at the bottom.
 */
/* END SOLUTION */

var Graph = function(){
  /* START SOLUTION */
  this._nodes = {};
  /* END SOLUTION */
};

Graph.prototype.addNode = function(node){
  /* START SOLUTION */
  if (node) {
    this._nodes[node] = this._nodes[node] || { edges: [] };
  }
  /* END SOLUTION */
};

Graph.prototype.contains = function(node){
  /* START SOLUTION */
  return !(this._nodes[node] === undefined);
  /* END SOLUTION */
};

Graph.prototype.removeNode = function(node){
  /* START SOLUTION */
  if (this.contains(node)) {
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
  /* END SOLUTION */
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  /* START SOLUTION */
  return this._nodes[fromNode].edges.indexOf(toNode) !== -1;
  /* END SOLUTION */
};

Graph.prototype.addEdge = function(fromNode, toNode){
  /* START SOLUTION */
  if (fromNode === undefined || toNode === undefined) return null;
  if (this._nodes[fromNode].edges.indexOf(toNode) === -1) { this._nodes[fromNode].edges.push(toNode) };
  if (this._nodes[toNode].edges.indexOf(fromNode) === -1) { this._nodes[toNode].edges.push(fromNode) };
  /* END SOLUTION */
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  /* START SOLUTION */
  var spliceIndex = this._nodes[fromNode].edges.indexOf(toNode);
  if (spliceIndex !== -1) { this._nodes[fromNode].edges.splice(spliceIndex, 1) };

  spliceIndex = this._nodes[toNode].edges.indexOf(fromNode);
  if (spliceIndex !== -1) { this._nodes[toNode].edges.splice(spliceIndex, 1) };
  /* END SOLUTION */
};

Graph.prototype.forEachNode = function(cb){
  /* START SOLUTION */
  for (var node in this._nodes) {
    cb(node);
  }
  /* END SOLUTION */
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


/* START SOLUTION */
//-------------------------------------------------------------------------------------------------
//  Alternative Implementation
//
//  Only changed methods are shown below.  The rest remain exactly as shown in the solution above.
//
//  Q: Why is this implementation faster?
//

/*
  -----------
  Graph.prototype.addNode = function(node){
    if (node) {
      this._nodes[node] = this._nodes[node] || { edges: {} };
    }
  };

  Graph.prototype.removeEdge = function(fromNode, toNode){
    delete this._nodes[fromNode].edges[toNode];
    delete this._nodes[toNode].edges[fromNode];
  };
  -----------
*/

/*
  A:  The naive answer is that there are two instructions to the previous implementation's
      four in the original removeEdge solution.  But we need to dig deeper than that.  .indexOf() identifies where in an array a value appears.  We know from our discussions around time complexity that finding a value in an array is an O(n) operation.  Even though we aren't writing any looping structure in our solution to find the value for 'spliceIndex', we should be aware that the array method 'indexOf' must do that iteration for us.

      In Javascript, we have the luxury of using an object to store our edges rather than an array.  Doing so gives us O(1) access to any edge in that list.
*/

/* END SOLUTION */
