var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var anInstance = Object.create(stackMethods);
  anInstance.storage = {};
  anInstance.counter = 0;
  return anInstance;
};

var stackMethods = {
  push: function(string) {
    this.storage[this.counter] = string;
    this.counter++;
  },
  pop: function() {
    this.counter--;
    var removed = this.storage[this.counter];
    delete this.storage[this.counter];
    return removed;
  },
  size: function() {
    if (this.counter < 0) {
      return 0;
    }
    return this.counter;
  },

  //pop
  pop: function() {
    this.counter--;
    var lastValue = this.storage[this.counter];
    delete this.storage[this.counter];
    return lastValue;
  },

  //size
  size: function() {
    return Object.keys(this.storage).length;
  }
};

