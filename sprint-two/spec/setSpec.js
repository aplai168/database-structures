describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains("Danny Glover")).toBe(true);
    expect(set.contains("Susan Sarandon")).toBe(true);
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).toBe(false);
  });
});
