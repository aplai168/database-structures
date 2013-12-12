describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert', 'remove', and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should store values that were inserted", function() {
    hashTable.insert("Steven", "Seagal");
    expect(hashTable.retrieve("Steven")).toEqual("Seagal");
  });

  it("should not contain values that were not inserted", function() {
    hashTable.insert("Steven", "Spielberg");
    expect(hashTable.retrieve("Steven")).not.toEqual("Seagal");
  });

  it("should not contain values that were removed", function() {
    hashTable.insert("Steven", "Tyler");
    hashTable.remove("Steven");
    expect(hashTable.retrieve("Steven")).not.toEqual("Tyler");
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  // add more tests!
});
