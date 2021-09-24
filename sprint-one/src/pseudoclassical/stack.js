var Stack = function() {
  //properties
  this.storage = {};
  this.counter = 0;
};


//push
Stack.prototype.push = function(value) {
  // add value to top of stack
  this.storage[this.counter] = value;
  //increment counter
  this.counter++;
};

//pop
Stack.prototype.pop = function() {
  // decrement the counter
  this.counter--;
  // assign the last value to a variable
  var last = this.storage[this.counter];
  // delete the last value
  delete this.storage[this.counter];
  //return the variable
  return last;
};

//size
Stack.prototype.size = function() {
  //return the size
  return Object.keys(this.storage).length;
};


//new instance
var NewInstance = new Stack();