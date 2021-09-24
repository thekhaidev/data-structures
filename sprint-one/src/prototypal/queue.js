var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var anInstance = Object.create(queueMethods);
  anInstance.storage = {};
  anInstance.counter = 0;
  return anInstance;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.storage[this.counter]) {
      this.counter++;
      this.storage[this.counter] = value;
    } else {
      this.storage[this.counter] = value;
      this.counter++;

    }
  },
  dequeue: function() {
    this.counter--;
    var removed = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return removed;
  },
  size: function() {
    if (this.counter < 0) {
      return 0;
    } return this.counter;
  }
};


