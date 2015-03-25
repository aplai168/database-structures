var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  /* START SOLUTION */
  var size = 0;
  /* END SOLUTION */

  // Implement the methods below
  someInstance.push = function(value){
    /* START SOLUTION */
    storage[size++] = value;
    /* END SOLUTION */
  };

  someInstance.pop = function(){
    /* START SOLUTION */
    size && size--;
    var result = storage[size];

    delete storage[size];

    return result;
    /* END SOLUTION */
  };

  someInstance.size = function(){
    /* START SOLUTION */
    return size;
    /* END SOLUTION */
  };

  return someInstance;
};
