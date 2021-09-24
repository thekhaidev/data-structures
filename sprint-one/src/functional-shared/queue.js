var Queue = function() {
  // An instance
  // Give properties - storage / counter
  // Need to use extend <-- Giving copy of manual

  var anInstance = {
    storage: {},
    counter: 0
  };

  _.extend(anInstance, queueMethods);
  return anInstance;

};

var queueMethods = {
  enqueue: function(value) {
  // If the value at storage is taken
    // Increment Counter
    if (this.storage[this.counter]) {
      this.counter++;
      this.storage[this.counter] = value;
    } else {
      // Add value to end
      this.storage[this.counter] = value;
      // Counter = 0 --> Counter++ --> Counter = 1
      this.counter++;
    }

  },
  dequeue: function() {
  // Seperate first element from list
  // Remove element from front of list
  // Decrement counter
  // Return that element
    var removed = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    this.counter--;
    return removed;
  },
  size: function() {
  // Return counter
    return Object.keys(this.storage).length;
  }
};
