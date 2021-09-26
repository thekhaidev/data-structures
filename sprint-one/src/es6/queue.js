class Queue {
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

var result = new Giraffe();