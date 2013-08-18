var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
/* START SOLUTION */
  var start = -1;
  var end = -1;
/* END SOLUTION */

  // Implement the methods below

  instance.enqueue = function(value){
/* START SOLUTION */
    end++;
    storage[end] = value;
/* END SOLUTION */
  };

  instance.dequeue = function(){
/* START SOLUTION */
    instance.size() && start++;
    var result = storage[start];
    delete storage[start];
    return result;
/* END SOLUTION */
  };

  instance.size = function(){
/* START SOLUTION */
    return end - start;
/* END SOLUTION */
  };

  return instance;
};
