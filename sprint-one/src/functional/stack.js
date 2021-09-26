//lifo method

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;
  someInstance.storage = storage;

  //initialize size to start at zero
  var size = 0;
  //define what push and pop
  var push, pop;

  // Implement the methods below

  //made a numerical key value
  var key = 1;

  //Add a string to the top of the stack
  someInstance.push = function(value) {
    // Should do what native push method does
    // Takes value and adds to end of storage object
    storage[currentSize] = value;
    currentSize++;
  };

  //Remove and return the string on the top of the stack
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
  //Return the number of items on the stack
  someInstance.size = function() {
    if (currentSize < 0) {
      return 0;
    }
    return currentSize;
  };

  return someInstance;
};

