var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; //items, the array of item
  var size = 0;



  // Implement the methods below
  someInstance.push = function(value) {
    //how to add an object to an array of objects
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(value) {
    //how to remove item from array of objects
    //removes the most recently items
    size--;
    var last = storage[size];
    delete storage[size];
    return last;
  };


  someInstance.size = function() { //maxsize and top?
    if (size < 0) {
      return 0;
    } else {
      return size;
    }
  };

  return someInstance;
};

console.log(stack({a:'b'}));
