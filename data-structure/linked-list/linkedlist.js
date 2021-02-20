class ListNode {
  data;
  next = null;

  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new ListNode(element);

    let current; // To hold the current head

    //   If the list is empty add this as a head node
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    let list = [];
    while (current.next) {
      list.push(current);
      current = current.next;
    }
    list.push(current);
    return list;
  }

  isEmpty() {
    return this.head === null;
  }

  currentHead = () => this.head;

  listSize = () => this.size;

  insertAt(value, position) {
    let currentPosition = 1;
    let nextNode = null;
    let node = new ListNode(value);

    let current = this.head;

    while (current.next && position - 1 !== currentPosition) {
      current = current.next;
      currentPosition++;
    }

    nextNode = current.next;
    current.next = node;
    node.next = nextNode;
  }

  reverseLinkedList(head) {
    let node = head;
    let previous = null;
    let list = [];
    while (node) {
      let tmp = node.next;
      node.next = previous;
      previous = node;
      node = tmp;
    }
    
    while(previous.next) {
      list.push(previous.data + " ->")
      previous = previous.next
    }
    list.push(previous.data)
    return list.join(' ')
  }

  removeKthNodeFromEnd(head, k) {
    let size = 1;
    let current = head;

    while (current.next) {
      current = current.next;
      size++;
    }

    let nodePositionToRemove = size - k;
    let currentPosition = 1;
    current = head;
    let prevNode = null;

    while (current.next && currentPosition <= nodePositionToRemove) {
      prevNode = current;
      current = current.next;
      currentPosition++;
    }
    if (prevNode !== null) {
      prevNode.next = current.next;
    } else {
      current = current.next;
    }
  }
}

module.exports = LinkedList;
