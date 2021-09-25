class Queue {
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {
    //add to the end
    if (this.storage[this.counter]) {
      this.counter++;
      this.storage[this.counter] = value;
    } else {
      this.storage[this.counter] = value;
      this.counter++;
    }
  }

  dequeue() {
    //remove from the front
    var first = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    this.counter--;
    return first;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

var result = new Giraffe();