class LinkedList {
  next = null;
  prev = null;
  data = null;

  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head;
  size;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let node = new LinkedList(value);
    let current = this.head;
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
      node.prev = current;
    }
    this.size++;
  }

  print(head, verbose = false) {
    if (!head?.next) return [];
    while (head.next) {
      //   verbose
      console.log(
        `Data: ${head.data} | Next: ${head.next?.data} | Previous: ${head.prev?.data}`
      );
      // : console.log(head);
      head = head.next;
    }
  }

  currentHead = () => this.head ?? null;
}

module.exports = DoublyLinkedList;
