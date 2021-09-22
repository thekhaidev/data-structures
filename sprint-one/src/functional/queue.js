var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  //create numerical keys
  var key = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add the new value to storage
    storage[key] = value;
    key++;
    return storage;
  };

  //Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    if (size > 0) {
      console.log(storage);
      //set a variable equal to the first value in storage
      var first = storage['1'];
      //delete the first variable from storage
      Delete(storage['1']);
      //return the deleted variable
      return first;
    }
  };

  someInstance.size = function() {
    size = Object.keys(storage).length;
    return size;
  };

  return someInstance;
};


//fifo method