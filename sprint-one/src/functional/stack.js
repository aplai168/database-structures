var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  /* START SOLUTION */
  var size = 0;
  /* END SOLUTION */

  // Implement the methods below
  instance.push = function(value){
    /* START SOLUTION */
    storage[size] = value;
    size++;
    /* END SOLUTION */
  };

  instance.pop = function(){
    /* START SOLUTION */
    size && size--;
    var result = storage[size];
    delete storage[size];
    return result;
    /* END SOLUTION */
  };

  instance.size = function(){
    /* START SOLUTION */
    return size;
    /* END SOLUTION */
  };

    return instance;
  };