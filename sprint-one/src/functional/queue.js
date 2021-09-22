var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add value to back of storage
  };

  someInstance.dequeue = function() {
    // Remove value from front of storage
  };

  someInstance.size = function() {
    // Return length of items in storage
  };

  return someInstance;
};
