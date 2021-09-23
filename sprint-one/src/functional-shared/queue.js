var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = {};
  newQueue.storage = {};
  newQueue.counter = 0;

  _.extend(newQueue, queueMethods);
  return newQueue;
};


var queueMethods = {
  enqueue: function(string) {
    if (this.storage[this.counter]) {
      this.counter++;
      console.log(this.counter);
      this.storage[this.counter] = string;
      console.log(this.storage[this.counter]);
    } else {
      console.log(this.counter);
      this.storage[this.counter] = string;
      console.log(this.storage[this.counter]);
      this.counter++;
    }
  },

  dequeue: function() {
    this.counter--;
    var removed = this.storage[Object.keys(this.storage)[0]];
    console.log(this.storage[Object.keys(this.storage)[0]]);
    delete this.storage[Object.keys(this.storage)[0]];
    console.log('counter should be 0 counter is ' + this.counter);
    return removed;
  },

  size: function() {
    if (this.counter < 0) {
      return 0;
    }
    return this.counter;
  }
};


