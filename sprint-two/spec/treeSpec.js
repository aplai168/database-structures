describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should add children to the tree", function() {
    tree.addChild(5);
    expect(tree.children[0].value).toEqual(5);
  });

  it("should return true for a value that the tree contains", function(){
    tree.addChild(5);
    expect(tree.contains(5)).toBe(true);
  });

  it("should return false for a value that was not added", function(){
    tree.addChild(5);
    expect(tree.contains(6)).toBe(false);
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).toEqual(6);
  });

  it("should correctly detect nested children", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).toBe(true);
    expect(tree.contains(8)).toBe(true);
  });

});
