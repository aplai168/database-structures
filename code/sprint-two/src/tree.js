var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a new node to add
  var child = new Tree(value);
  this.children.push(child);
  return child;
};

treeMethods.contains = function(target) {
  console.log(this.value, 'this.value')
  if(this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    console.log('child', child)
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};

//use this for understanding how to recurse through even tho the param is only target
// var nestedEvenSum = function(obj) { //
//   var sum = 0;
//   for(var key in obj) {
//     if(obj[key] % 2 === 0) {
//       sum = sum + Number(obj[key]);
//     }
//     if(typeof obj[key] === 'object'){
//       sum = sum + nestedEvenSum(obj[key]);
//     }
//   }
//   return sum;
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */
