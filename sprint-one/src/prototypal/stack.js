var Stack = function() {
  // create an instance
  // storage property assigned to  created storage object

  //add the properties to the storage property

  //return the instance

  var anInstance = Object.create(stackMethods);
  anInstance.storage = {};
  anInstance.counter = 0;
  return anInstance;
};

var stackMethods = {
  //push
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  //pop
  pop: function() {
    this.counter--;
    var lastValue = this.storage[this.counter];
    delete this.storage[this.counter];
    return lastValue;
  },

  //size
  size: function() {
    return Object.keys(this.storage).length;
  }
};

