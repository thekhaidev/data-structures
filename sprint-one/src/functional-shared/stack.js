var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //hull of the boat (holds all other parts)
  var someInstance = {};
  //cargo hold
  someInstance.storageObj = {};
  //numerical key value
  someInstance.key = 1;
  //start size at 0
  someInstance.size = 0;

  extend(someInstance, stackMethods);
  // console.log(someInstance)
  return someInstance;
};

// this === someInstance (each of which are unique)

var stackMethods = {
  //push add cargo
  // push : function(value){
  //   //equivalent to line 22 of functional stack
  //   this.storageObj[this.key] = value;
  //   this.key++;
  //   return this.storageObj;
  // };
  //pop take out cargo
  // pop : function () {
  //   var last = this.storageObj[this.key -1];
  //   delete this.storageObj[this.key -1];
  //   this.key--;
  //   return last;
  // };
  // //size how much cargo is in the hold
  // size : function () {
  //   this.size = Object.keys(storage.length);
  //   return this.size;
  // };
};


