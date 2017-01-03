var Queue = function() {
  var someInstance = {};
  //properties
  var newestIndex = 0;
  var oldestIndex = 0;
  var sizee = 0;
  var storage = {};

  someInstance.size = function() {
    sizee = newestIndex - oldestIndex;
    if(sizee < 0) return 0;
    return sizee;
  }

  someInstance.enqueue = function(data) {
    storage[newestIndex] = data;
    newestIndex++;
  }

  someInstance.dequeue = function() {
    //store the oldest index to the current oldest index
    var deletedData = storage[oldestIndex];
      delete storage[oldestIndex];
      oldestIndex++;
      return deletedData;
    
  }

  return someInstance;
};
