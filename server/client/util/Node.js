/* Doubly Linked list Node */
class Node {
  // Constructor to create a new node
  // next and prev is by default initialized as null
  constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}
export default Node;
