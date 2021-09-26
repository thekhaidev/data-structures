var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // take the value
    // create a new node with that value
    // if there is no head --> become the head
    // if there is a head --> become tail
    // if there is no tail --> tail

    var newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;

  };

  list.removeHead = function() {
    //set a variable that is equal to the head of the list
    var removed = this.head.value;
    //set this.head to equal the following node in the list
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target) {
    // iterate through linked list for target
    // return true/false
    var current = this.head;

    while ( current ) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// removeHead is constant
// addToTail is constant
// contains is linear

