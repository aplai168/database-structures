var HashTable = function() {
  /* START SOLUTION */
  this._size = 0;
  /* END SOLUTION */
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  /* START SOLUTION */
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }

  bucket.push([k,v]);
  this._storage.set(index, bucket);
  this._size++;

  if (this._size > this._limit * 0.75) {
    this._resize(this._limit*2);
  }
  /* END SOLUTION */
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  /* START SOLUTION */
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return null;
  /* END SOLUTION */
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  /* START SOLUTION */
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1)
      this._size--;
      if (this._size < this._limit * 0.25) {
        this._resize(Math.floor(this._limit/2));
      }
      return tuple[1];
    }
  }

  return null;
  /* END SOLUTION */
};

/* START SOLUTION */
HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) { return; }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};
/* END SOLUTION */

/*
 * Complexity: What is the time complexity of the above functions?
 */

/* START SOLUTION */

//////////////////////////////////////////////////////////////////
// Higher-Order Fuction implementation
//////////////////////////////////////////////////////////////////

var HashTableHOF = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTableHOF.prototype.insert = function(k, v) {
  return this._tupleSearch(k,
    function(bucket, tuple, i) {
      tuple[1] = v;
    },
    function(bucket) {
      bucket.push([k,v]);
      this._size++;
      if (this._size > 0.75 * this._limit) {
        this._resize( this._limit*2 );
      }
    }
  );
};

HashTableHOF.prototype.retrieve = function(k) {
  return this._tupleSearch(k,
    function(bucket, tuple, i) {
      return tuple[1];
    }
  );
};

HashTableHOF.prototype.remove = function(k) {
  return this._tupleSearch(k,
    function(bucket, tuple, i) {
      bucket.splice(i, 1);
      this._size--;
      if (this._size < 0.25 * this._limit) {
        this._resize(Math.floor(this._limit/2));
      }
      return tuple[1];
    }
  );
};

HashTableHOF.prototype._tupleSearch = function(key, foundCB, notFoundCB) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index) || [];

  this._storage.set(index, bucket);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return foundCB.call(this, bucket, tuple, i);
    }
  }

  return notFoundCB ? notFoundCB.call(this, bucket) : null;
}

HashTableHOF.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(this._redistribute.bind(this));
};

HashTableHOF.prototype._redistribute = function(bucket) {
  if (!bucket) { return; }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    this.insert(tuple[0], tuple[1]);
  }
};

//////////////////////////////////////////////////////////////////
// uncomment this line to use the HOF version of HashTable
// HashTable = HashTableHOF;
//////////////////////////////////////////////////////////////////

/* END SOLUTION */
