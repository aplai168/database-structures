//prototypal

var Stack = function() {
//the variable will delegate failed lookups to the prototype
    var someInstance = Object.create(stackMethods);
    someInstance.sizee = 0;
    someInstance.storage = {};

    return someInstance;
}

stackMethods = {};

stackMethods.push = function(data) {
  //add data and increase size
  this.storage[this.sizee] = data;
  this.sizee++;
};

stackMethods.pop = function() {
  //decrease size
  this.sizee--;
  //delete last added data
  var deletedData = this.storage[this.sizee];
  delete this.storage[this.sizee];
  return deletedData;
}

stackMethods.size = function() {
  if(this.sizee < 0) {
    return 0;
  }
  return this.sizee;
}
