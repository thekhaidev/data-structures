var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var anInstance = {};
  anInstance.storage = [];
  anInstance.counter = 0;
  _.extend(anInstance, stackMethods);
  return anInstance;
};

var stackMethods = {
  push: function(string) {
    if (this.storage[this.counter]) {
      this.counter++;
      this.storage[this.counter] = string;
    }
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
  }
};


