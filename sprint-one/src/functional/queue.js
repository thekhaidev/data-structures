var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  //create numerical keys
  var key = 1;
  //create var to track current location for dequeue
  var num = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add the new value to storage
    storage[key] = value;
    key++;
    return storage;
  };

  //Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    //could set the location for storage to equal an increasing variable value with a toString
    var index = num.toString();
    //set a variable equal to the first value in storage
    var first = storage[index];
    //delete the first variable from storage
    delete storage[index];
    //return the deleted variable
    num++;
    return first;
  };

  someInstance.size = function() {
    size = Object.keys(storage).length;
    return size;
  };
  return someInstance;
};


//fifo method