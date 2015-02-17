/* START SOLUTION */
 // Note:  This solution can be refactored to provide improved performance.  How might you do that?
 //        Consider the Time Complexity of removing edges.  After you review this solution, consider
 //        how you might redefine your graph implementation to make it faster.
 //
 // When you're ready, an alternate implementation follows at the bottom.
/* END SOLUTION */

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  /* START SOLUTION */
  this._nodes = {};
  /* END SOLUTION */
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  /* START SOLUTION */
  if (node) {
    this._nodes[node] = this._nodes[node] || { edges: [] };
  }
  /* END SOLUTION */
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  /* START SOLUTION */
  return !(this._nodes[node] === undefined);
  /* END SOLUTION */
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  /* START SOLUTION */
  if (this.contains(node)) {
    //   Removes edges between node to be deleted and all other connected nodes.
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
  /* END SOLUTION */
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  /* START SOLUTION */
  return this._nodes[fromNode].edges.indexOf(toNode) !== -1;
  /* END SOLUTION */
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  /* START SOLUTION */
  // If either node doesn't currently exist, return null
  if (fromNode === undefined || toNode === undefined) return null;
  // Otherwise, add an edge to each node pointing to the other.
  if (this._nodes[fromNode].edges.indexOf(toNode) === -1) { this._nodes[fromNode].edges.push(toNode) };
  if (this._nodes[toNode].edges.indexOf(fromNode) === -1) { this._nodes[toNode].edges.push(fromNode) };
  /* END SOLUTION */
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  /* START SOLUTION */
  // Remove "toNode" from "fromNode's" edges array.
  var spliceIndex = this._nodes[fromNode].edges.indexOf(toNode);
  if (spliceIndex !== -1) { this._nodes[fromNode].edges.splice(spliceIndex, 1) };

  // Remove "fromNode" from "toNode's" edges array.
  spliceIndex = this._nodes[toNode].edges.indexOf(fromNode);
  if (spliceIndex !== -1) { this._nodes[toNode].edges.splice(spliceIndex, 1) };
  /* END SOLUTION */
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
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
//  ###Alternative Implementation
//
//  Only changed methods are shown here.  The rest remain exactly as shown in the solution above.
//
//  Q: Why is this implementation faster?
//

  // Graph.prototype.addNode = function(node){
  //   if (node) {
  //     this._nodes[node] = this._nodes[node] || { edges: {} };
  //   }
  // };

  // Graph.prototype.removeEdge = function(fromNode, toNode){
  //   delete this._nodes[fromNode].edges[toNode];
  //   delete this._nodes[toNode].edges[fromNode];
  // };

  // ------------------------
  // A:  The naive answer is that there are two instructions to the previous implementation's
  //     four in the original removeEdge solution.  But we need to dig deeper than that.  .indexOf() identifies where in an array a value appears.  We know from our discussions around time complexity that finding a value in an array is an O(n) operation.  Even though we aren't writing any looping structure in our solution to find the value for 'spliceIndex', we should be aware that the array method 'indexOf' must do that iteration for us.

  // In Javascript, we have the luxury of using an object to store our edges rather than an array.  Doing so gives us O(1) access to any edge in that list.


/* END SOLUTION */
