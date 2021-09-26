var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentNumKey = 0;

  someInstance.storage = storage;

  var size = 0;

  //create numerical keys
  var key = 1;
  //create var to track current location for dequeue
  var num = 1;

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

  //Remove and return the string at the front of the queue
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
