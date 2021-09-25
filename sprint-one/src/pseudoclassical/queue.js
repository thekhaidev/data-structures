var Queue = function() {
  this.storage = {};
  this.counter = 0;
};


//enqueue
Queue.prototype.enqueue = function(value) {
  if (this.storage[this.counter]) {
    this.counter++;
    this.storage[this.counter] = value;
  } else {
    this.storage[this.counter] = value;
    this.counter++;
  }
};
//dequeue
Queue.prototype.dequeue = function() {
  this.counter--;
  var removed = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return removed;
};
//size
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};



//new instance
var finalQueue = new Queue();