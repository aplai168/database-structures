var HashTable = function() {
  this._limit = 8;
  this._length = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var override = false;
  var bucket = this._storage.get(index);

  if (!bucket) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      override = true;
    }
  }
  if (!override) {
    bucket.push([k, v]);
    this._length++;
    if (this._length > (this._limit * 0.75)) {
      this.resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._length--;
    }
    if (this._length < this._limit * 0.25) {
      this.resize(this._limit / 2);
    }
    return tuple[1];
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = [];
  var that = this;
  this._limit = newLimit;
  this._storage.each(function(value) {
    oldStorage.push(value);
  });
  this._storage = LimitedArray(newLimit);
  this._length = 0;
  oldStorage.forEach(function(bucket) {
    console.log(bucket, ' bucket');
    if (bucket) {
      bucket.forEach(function(tuple) {
        that.insert(tuple[0], tuple[1]);
      });
    }
  });
};
