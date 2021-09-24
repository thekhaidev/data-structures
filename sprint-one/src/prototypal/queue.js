var Queue = function() {
  //create the instance
  //assign properties
  //storage
  //count

  //return instance

  var anInstance = Object.create(queueMethods);

  anInstance.storage = {};
  anInstance.counter = 0;

  return anInstance;
};

var queueMethods = {
  //enqueue
  enqueue: function(value) {
    if (this.storage[this.counter]) {
      this.counter++;
      this.storage[this.counter] = value;
    } else {
      this.storage[this.counter] = value;
      this.counter++;
    }
  },
  //dequeue
  dequeue: function() {
    var removed = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    this.counter--;
    return removed;
  },

  //size
  size: function() {
    return Object.keys(this.storage).length;
  }

};


