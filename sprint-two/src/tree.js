
var makeTree = function(value){
  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = undefined;

  return newTree;
};


var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  if(this.children === undefined){
    this.children = [child];
  } else {
    this.children.push(child);
  }
};

treeMethods.contains = function(target){
  if (target === this.value){
    return true;
  } else if (this.children !== undefined){
    for (var i = 0; i < this.children.length; i++){
      if ((this.children[i]).contains(target)) {
        return true;
      }
    }
  }
return false;
};

treeMethods.removeFromParent = function(){
  var indexToRemove;
  for (var i = 0; i < this.parent.children.length; i++){
    if (this.parent.children[i] === this){
      indexToRemove = i;
      break;
    }
  }
  this.parent.children.splice(indexToRemove,1);
  this.parent = undefined;
};

treeMethods.traverse = function(callback){
  callback(this);

  if (this.children){
    for (var i = 0; i < children.length;){
      this.children[i].traverse(callback);
    }
  }
};
