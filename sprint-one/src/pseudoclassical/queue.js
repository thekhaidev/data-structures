var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};


Queue.prototype.enqueue = function(value) {
  if (this.storage[this.counter]) {
    this.counter++;
    this.storage[this.counter] = value;
  } else {
    this.storage[this.counter] = value;
    this.counter++;
  }

};

Queue.prototype.dequeue = function() {
  var removed = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  this.counter--;
  return removed;
};

Queue.prototype.size = function() {
  if (this.counter < 0) {
    return 0;
  } return this.counter;
};

var queue = new Queue;