var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.prev = null;


  list.removeTail = function(){
    var tailInWaiting = list.tail.prev;
    var oldTailValue = list.tail.value;
    tailInWaiting.next = null;
    delete list.tail;
    list.tail = tailInWaiting;
    return oldTailValue;
  };


  list.addToTail = function(value){
    var tailInWaiting = makeNode(value);

    if(list.head === null) {
      list.head = tailInWaiting;
    }

    tailInWaiting.prev = list.tail;

    if (list.tail){
      list.tail.next = tailInWaiting;
    }

    list.tail = tailInWaiting;
  };

  list.removeHead = function(){
    var currentHeadVal = list.head.value;
    var headInWaiting = list.head.next;
    headInWaiting.prev = null;
    delete list.head;
    list.head = headInWaiting;
    return currentHeadVal;
  };

  list.addToHead = function(value){
    var headInWaiting = makeNode(value);
    list.head.prev = headInWaiting;
    headInWaiting.next = list.head;
    list.head = headInWaiting;
  };

  list.contains = function(target, node){
    node = node || list.head;
    if(node.value === target) {
      return true;
    }
    if(node.next === null) {
      return false;
    } else {
      return list.contains(target, node.next);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
