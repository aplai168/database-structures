describe("graph", function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  xit("should have methods named 'addNode', 'contains', 'removeNode', 'addEdge', 'getEdge', 'removeEdge' and 'forEachNode'", function() {
    expect(graph.addNode).toEqual(jasmine.any(Function));
    expect(graph.contains).toEqual(jasmine.any(Function));
    expect(graph.removeNode).toEqual(jasmine.any(Function));
    expect(graph.getEdge).toEqual(jasmine.any(Function));
    expect(graph.addEdge).toEqual(jasmine.any(Function));
    expect(graph.removeEdge).toEqual(jasmine.any(Function));
  });

  xit("should store values as nodes that were inserted", function() {
    graph.addNode("kittens");
    graph.contains("kittens");
    expect(graph.contains("kittens")).toBe(true);
  });

  xit("should remove nodes that were inserted", function() {
    graph.addNode("puppies");
    graph.removeNode("puppies");
    expect(graph.contains("puppies")).toBe(false);
  });

  xit("should automatically create an edge between two nodes if there is only one node in the graph", function() {
    graph.addNode("puppies");
    graph.addNode("kittens");
    expect(graph.getEdge("puppies", "kittens")).toBe(true);
  });

  xit("should create edges between two nodes", function() {
    graph.addNode("puppies");
    graph.addNode("kittens");
    graph.addNode("penguins", "puppies");
    expect(graph.getEdge("penguins", "puppies")).toBe(true);
    expect(graph.getEdge("penguins", "kittens")).toBe(false);
  });

  xit("should remove edges between nodes", function() {
    graph.addNode("apples");
    graph.addNode("bananas");
    graph.addNode("satsumas", "bananas");
    graph.addEdge("satsumas", "apples")
    graph.removeEdge("apples", "bananas")
    expect(graph.getEdge("apples", "bananas")).toBe(false);
  });

  xit("should remove nodes without any edges", function() {
    graph.addNode("jacket");
    graph.addNode("hat");
    graph.removeEdge("jacket", "hat");
    expect(graph.contains("hat")).toBe(false);
    expect(graph.contains("jacket")).toBe(false);
  });

});
