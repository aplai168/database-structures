/*//this is the functional instantiation
*/
var Stack = function() {
  /*/create the properties and methods of the object within the function
  // will be the instance (object) all all the properties and methods we want
  */
  var someInstance = {};
  var size = 0;
  var storage = {};

  //the methods
  someInstance.push = function(data) {
    //store data in storage
    storage[size] = data;
    //increase size without needing to declare a new variable
    size++;
  };

  someInstance.pop = function(data) {
    //declare variables
    size--;
    //make sure stack has data before removing

      //remove from storage the last added data like a stack of plates
        //store data at the current size (most recently added data)
      var deletedData = storage[size];
      //delete that current data
      delete storage[size];

      return deletedData;


  };

  someInstance.size = function() {
    if(size < 0) {
      return 0;
    }
    return size;
  };
  //return the object
  return someInstance;
};
