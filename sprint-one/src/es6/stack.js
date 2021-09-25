class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  pop() {
    this.counter--;
    var popped = this.storage[this.counter];
    delete this.storage[this.counter];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

var placeholder = new Stack();