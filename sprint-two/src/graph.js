var Graph = function(){
  /* START SOLUTION */
  this._nodes = {};
  /* END SOLUTION */
};

Graph.prototype.addNode = function(newNode, toNode){
  /* START SOLUTION */
  var size = 0;
  for (var node in this._nodes) {
    size += 1;
  }

  if (size === 0) {
    this._nodes[newNode] = { 'edges': [] }    
  } else if (size === 1){
    var toAdd; 
    for (var node in this._nodes) {
      toAdd = node;
    }
    this._nodes[newNode] = { 'edges': [] }    
    this.addEdge(newNode, toAdd);
  } else {
    this._nodes[newNode] = { 'edges': [] }
    this.addEdge(newNode, toNode);
  }
  /* END SOLUTION */
};

Graph.prototype.contains = function(node){
  /* START SOLUTION */
  for (var oneNode in this._nodes) {
    if (this._nodes[oneNode]) return true;
  }
  return false;
  /* END SOLUTION */
};

Graph.prototype.removeNode = function(node){
  /* START SOLUTION */
  for (var toNode in this._nodes) {
    this.removeEdge(toNode, node);
  }
  if (this._nodes[node]) delete this._nodes[node];
  /* END SOLUTION */
};

Graph.prototype.getEdge = function(fromNode, toNode){
  /* START SOLUTION */
  for (var i = 0; i < this._nodes[fromNode]['edges'].length; i++) {
    if (this._nodes[fromNode]['edges'][i] === toNode) return true;
  }
  return false;
  /* END SOLUTION */
};

Graph.prototype.addEdge = function(fromNode, toNode){
  /* START SOLUTION */ 
  for (var i = 0; i < this._nodes[fromNode]['edges'].length; i++){
    if (this._nodes[fromNode]['edges'][i] === toNode) return;
  }
  this._nodes[fromNode]['edges'].push(toNode)
  this._nodes[toNode]['edges'].push(fromNode)
  /* END SOLUTION */
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  /* START SOLUTION */
  var len = this._nodes[fromNode]['edges'].length;
  for (var i = 0; i < len; i++) {
    if (this._nodes[fromNode]['edges'][i] === toNode) {
      if (this._nodes[fromNode]) this._nodes[fromNode]['edges'].splice(i, 1)
      if (this._nodes[fromNode]['edges'].length === 0) delete this._nodes[fromNode]
      if (this._nodes[toNode] !== undefined) this.removeEdge(toNode, fromNode)
    }
  }
  /* END SOLUTION */
};
