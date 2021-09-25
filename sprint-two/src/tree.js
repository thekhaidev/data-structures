var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // Fixed

  //extend
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = new Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  //Check if Dave has children named Rudolf
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    var current = this.children[i];
    if (current.contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


