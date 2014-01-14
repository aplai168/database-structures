var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
  /* START SOLUTION */
    var newTail = makeNode(value);
    if ( !list.head ){ list.head = newTail; }
    if ( list.tail ){ list.tail.next = newTail; }
    list.tail = newTail;
  /* END SOLUTION */
  };

  list.removeHead = function(){
    /* START SOLUTION */
    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
    /* END SOLUTION */
  };

  list.contains = function(target, node){
    /* START SOLUTION */
    node = node || list.head;
    while ( node ){
      if ( node.value === target ){ return true; }
      node = node.next;
    }
    return false;
    /* END SOLUTION */
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
