var Stack = function() {

  //hull of the boat (holds all other parts)
  var someInstance = {};
  //cargo hold
  someInstance.storageObj = {};
  //numerical key value
  someInstance.key = 1;
  //start size at 0
  someInstance.size = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

// this === someInstance (each of which are unique)
var stackMethods = {};

// push add cargo
stackMethods.push = function(value) {
  //equivalent to line 22 of functional stack
  //someInstance.storageObj[someInstance.key] = value
  this.storageObj[this.key] = value;
  //someInstance.key++
  this.key++;
  //return someInstance.storageObj
  return this.storageObj;
};

// pop take out cargo
stackMethods.pop = function () {
  var last = this.storageObj[this.key - 1];
  delete this.storageObj[this.key - 1];
  this.key--;
  return last;
};

//size how much cargo is in the hold
stackMethods.size = function () {
  this.size = Object.keys(this.storageObj).length;
  return this.size;
};

