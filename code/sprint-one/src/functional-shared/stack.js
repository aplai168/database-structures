//function with shared methods
var Stack = function() {
  var someInstance = {};

  //shared methods
  //sizee is the number of times a new item was added but the index it'll be stored at will be -1 because it starts at 0 !
  someInstance.sizee = 0;
  someInstance.storage = {};

  //need to use the extend function to extend the key value pairs from stackMethods to the instances
  extend(someInstance, stackMethods);
  return someInstance;
};

//create the extend function
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
//store methods in an object
var stackMethods = {};

stackMethods.push = function(data) {
  //increase the sizee and store
  //use this to refer to the instance
  this.storage[this.sizee] = data;
  this.sizee++;
};

stackMethods.pop = function(data) {
  //need to decrease the size first
  this.sizee--;
  //decrease sizee and delete value
  var deletedData = this.storage[this.sizee];
  delete this.storage[this.sizee];
  return deletedData;
};

  stackMethods.size = function(data) {
  //to grab the size
  if (this.sizee < 0) {
    return 0;
  }
  return this.sizee;
};
