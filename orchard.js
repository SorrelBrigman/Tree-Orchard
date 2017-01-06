// Unit Tests

// There should be a Plant function defined.
var Plant = function() {
// There should be a height property on Plant.
  this.height;
// There should be a function named increaseHeight on the prototype of Plant.
  this.increaseHeight = function(growth) {
    this.height = this.height + growth;
  };
// There should be a function named decreaseHeight on the prototype of Plant.
  this.descreaseHeight = function(amount) {
    this.height = this.height - amount;
  };
};
// There should be a Tree function defined.
var Tree = function() {
  this.branches;

  // There should be a function named grow on the prototype of Tree.
  this.grow = function(amount) {
  // When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))
  this.height = this.height + amount;
  };

  // There should be a function named trim on the prototype of Tree.
  this.trim = function(amount) {
  // When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
  this.height = this.height - amount;
  // When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
  this.branches = this.branches - 1;
  };

}

Tree.prototype = new Plant();
