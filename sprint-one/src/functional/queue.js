var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentNumKey = 0;

  someInstance.storage = storage;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add value to back of storage
    if (storage[currentNumKey]) {
      currentNumKey++;
      storage[currentNumKey] = value;
    } else {
      storage[currentNumKey] = value;
      currentNumKey ++;
    }
  };

  someInstance.dequeue = function() {
    // Remove value from front of storage
    var removed = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    currentNumKey--;
    return removed;
  };

  someInstance.size = function() {
    // Return length of items in storage
    if (currentNumKey < 0) {
      return 0;
    }
    return currentNumKey;
  };

  return someInstance;
};