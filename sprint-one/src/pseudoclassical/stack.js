

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};


var stack = new Stack;

Stack.prototype.push = function(value) {
  if (this.storage[this.counter]) {
    this.counter++;
    this.storage[this.counter] = value;
  } else {
    this.storage[this.counter] = value;
    this.counter++;
  }

};

Stack.prototype.pop = function() {
  this.counter--;
  var removed = this.storage[this.counter];
  delete this.storage[this.counter];
  return removed;

};

Stack.prototype.size = function() {
  if (this.counter < 0) {
    return 0;
  } return this.counter;
};