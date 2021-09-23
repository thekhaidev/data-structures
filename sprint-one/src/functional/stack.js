var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;
  someInstance.storage = storage;

  // Implement the methods below
  someInstance.push = function(value) {
    // Should do what native push method does
    // Takes value and adds to end of storage object
    storage[currentSize] = value;
    currentSize++;
  };

  someInstance.pop = function() {
    // Should do what native pop method does
    // Removes last value of storage object
    currentSize--;
    console.log(currentSize);
    var removed = storage[currentSize];
    delete storage[currentSize];
    if (currentSize < 0) {
      return 0;
    }
    return removed;

  };

  someInstance.size = function() {
    if (currentSize < 0) {
      return 0;
    }
    return currentSize;
  };

  return someInstance;
};
