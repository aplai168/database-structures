//the constructor for a linkedlist
var LinkedList = function() {
  //list is an instance of a linkedlist
  var list = {};
  list.head = null;
  list.tail = null;
  //the methods
  list.addToTail = function(value) {
    //create an instance of node
    var node = new Node(value);
    //if there's no head already
    if (!list.head) {
      //then assign both the head and tail to node
      list.head = node;
      list.tail = node;
    } else {
      //if there's already a head
      //then assign the tail's next to the new node
      list.tail.next = node;
      //then assign the tail to the new node
      list.tail = node;
    }
  };

  list.removeHead = function() {
    //assign the old head to the current head
      var oldHead = list.head;
      //point the head to the old head's next
      list.head = oldHead.next;
      //return the old head's value
      return oldHead.value;

  };

  list.contains = function(target) {
    //assign the head to be the current value
    var current = list.head;
    //loop through
    while (current) {
      //if the current's value equals the target return true
      if (current.value === target) return true;
      //the current will also receive the current's next value
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 It is constant time insertion and removal because it's not indexed whereas for arrays, it's linear.
 */
