var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for( var j = 0; j < bucket.length; j++ ){
    var pair = bucket[j];
    if( pair[0] === k ){
      pair[1] = v;
      break;
    }
  }
  bucket.push([k,v]);
  this._storage.set(i, bucket);  
  this._size++;
  // if( this._size > this._limit * 0.75 ){
  //   this.resize(this._limit*2);
  // }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) return null;
  for( var j = 0; j < bucket.length; j++ ){
    var pair = bucket[j];
    if( pair[0] === k ){
      return pair[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) return null;
  for( var j = 0; j < bucket.length; j++ ){
    var pair = bucket[j];
    if( pair[0] === k ){
      var v = pair[1];
      bucket.splice(j, 1)
      break;
    }
  }
  // if (this._size < this._limit * 0.25){
  //   this.resize(this._limit/2);
  // }
  return v || null;
};


// TODO: Resizing is an extra credit requirement. Should it appear in the solution?

// HashTable.prototype.resize = function(newLimit){
//   var oldStorage = this._storage;
//   this._limit = newLimit;
//   this._storage = makeLimitedArray(this._limit);
//   oldStorage.each(function(bucket){
//     for( var i = 0; i < bucket.length; i++ ){
//       var pair = bucket[i];
//       this.insert(pair[0], pair[1]);
//     }
//   });
// };
