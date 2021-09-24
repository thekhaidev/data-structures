class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {
    if (this.storage[this.counter]) {
      this.counter++;
      this.storage[this.counter] = value;
    } else {
      this.storage[this.counter] = value;
      this.counter++;
    }
  }

  dequeue() {
    var removed = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    this.counter--;
    return removed;
  }

  size() {
    if (this.counter < 0) {
      return 0;
    } return this.counter;
  }
}
