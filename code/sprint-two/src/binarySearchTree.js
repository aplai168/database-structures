var BinarySearchTree = function(value) {

  var BinaryTree = Object.create(binaryTreePrototype);
  //we'll always need a value for the nodes
  //this is the current node we're on so we're going to do everything in relation tho this node
  BinaryTree.value = value;
  BinaryTree.left = null;
  BinaryTree.right = null;
  return BinaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(value) {
  if (value < this.value) {
    //only insert where the value will be the lowest value/highest value
    if (this.left === null) {
      //if there's none on the left, then create another binaryTree inserting the value on the left
      this.left = BinarySearchTree(value);
    } else {
      //recurse if there's still an item on the left
      this.left.insert(value);
    }
  } else if (value > this.value){
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {

  }
}

binaryTreePrototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value) {
    //this recurses on the left value to do the checking all over again
    return !!this.left && this.left.contains(target);
  } else if (target > this.value) {
    return !!this.right && this.right.contains(target);
  }
}

binaryTreePrototype.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left) {
    this.left.depthFirstLog(cb);
  } else if (this.right) {
    this.right.depthFirstLog(cb);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
