import Node from "./Node";
// linkedlist class
// functions to be implemented
// add(element)
// insertAt(element, location)
// removeFrom(location)
// removeElement(element)

// Helper Methods
// isEmpty
// size_Of_List
// PrintList
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    /* 1. allocate node
     * 2. put in the data */
    let new_node = new Node(data);

    let last = this.head;

    /* 3. This new node is going to be the last node, so
     * make next of it as NULL*/
    new_node.next = null;

    /* 4. If the Linked List is empty, then make the new
     * node as head */
    if (this.head == null) {
      new_node.prev = null;
      this.head = new_node;
      return;
    }

    /* 5. Else traverse till the last node */
    while (last.next != null) last = last.next;

    /* 6. Change the next of last node */
    last.next = new_node;

    /* 7. Make last node as previous of new node */
    new_node.prev = last;
  }
}

export default LinkedList;
