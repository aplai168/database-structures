//this is done in the pseudoclassical style
//create a constructor stack
var Stack = function() {
  //create an instance of stack, which is an object created by the constructor
  var someInstance = {};
  //create two properties
  //property for storing amount of data that was pushed in
  this._size = 0;
  //property for storing data
  this._storage = {};
};

//create methods that will be shared among all instances of stack through a prototype
Stack.prototype.push = function(data) {
  //increase the size when data is added and add it to a variable to store it at that number or order
  var size = this._size++;

  //add data to be stored at the key of when it was added to the stack
  this._storage[size] = data;
};

Stack.prototype.pop = function() {
  //create a variable to store the deleted data and a size variable to store current size before deletion
  var size = this._size,
    deletedData;
  //Consider if stack is empty, do not allow deletion
  if(size) {
    //assign the last data value into a variable so that it can be returned later even after being deleted
    deletedData = this._storage[size];
    //delete the last pushed data value
    delete this._storage[size];
    //decrease the current size
    this._size--;
    //return what you deleted
    return deletedData;
  }
};

Stack.prototype.size = function() {
  return this._size;
}
