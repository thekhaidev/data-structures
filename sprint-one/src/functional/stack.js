//lifo method

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //initialize size to start at zero
  var size = 0;
  //define what push and pop
  var push, pop;

  // Implement the methods below

  //made a numerical key value
  var key = 1;

  //Add a string to the top of the stack
  someInstance.push = function(value) {
    //set a numerical value for the key that will be increased by one as each value is added to the stack
    storage[key] = value;
    key++;
    return storage;
  };

  //Remove and return the string on the top of the stack
  someInstance.pop = function() {
    //using object.keys, remove the string at the key that is at the end of the generated list
    var last = storage[key - 1];
    //delete the key
    delete storage[key - 1];
    key--;
    return last;
  };
  //Return the number of items on the stack
  someInstance.size = function() {
    size = Object.keys(storage).length;
    return size;
  };

  return someInstance;
};

