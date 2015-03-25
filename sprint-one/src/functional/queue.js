var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  /* START SOLUTION */
  var start = 0;
  var end = 0;
  /* END SOLUTION */

  // Implement the methods below

  someInstance.enqueue = function(value){
    /* START SOLUTION */
    storage[end++] = value;
    /* END SOLUTION */
  };

  someInstance.dequeue = function(){
    /* START SOLUTION */
    someInstance.size() && start++;
    var result = storage[start];

    delete storage[start];

    return result;
    /* END SOLUTION */
  };

  someInstance.size = function(){
    /* START SOLUTION */
    return end - start;
    /* END SOLUTION */
  };

  return someInstance;
};
