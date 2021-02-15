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

// const operations = [
//   { arguments: [], method: 'isEmpty' },
//   { arguments: [], method: 'currentHead' },
//   { arguments: [], method: 'listSize' },
//   { arguments: [1], method: 'add' },
//   { arguments: [2], method: 'add' },
//   { arguments: [3], method: 'add' },
//   { arguments: [5], method: 'add' },
//   { arguments: [], method: 'printList' },
//   { arguments: [], method: 'isEmpty' },
//   { arguments: [], method: 'currentHead' },
//   { arguments: [], method: 'listSize' },
//   { arguments: { value: 4, position: 4 }, method: 'insertAt' },
//   { arguments: [], method: 'printList' },
// ];

const operations = [
  { arguments: [0], method: 'add' },
  { arguments: [1], method: 'add' },
  { arguments: [2], method: 'add' },
  { arguments: [3], method: 'add' },
  { arguments: [4], method: 'add' },
  { arguments: [5], method: 'add' },
  { arguments: [6], method: 'add' },
  { arguments: [7], method: 'add' },
  { arguments: [8], method: 'add' },
  { arguments: [9], method: 'add' },
  { arguments: [], method: 'printList' },
  { arguments: [], method: 'removeKthNodeFromEnd' },
  { arguments: [], method: 'printList' },
];

const LinkedListOperations = () => {
  let linkedList = new LinkedList();
  operations.forEach((operation) => {
    switch (operation.method) {
      case 'add':
        operation.output = linkedList.add(operation.arguments[0]);
        console.log(operation);
        break;
      case 'printList':
        operation.output = linkedList.printList();
        console.log(operation);
        break;
      case 'isEmpty':
        operation.output = linkedList.isEmpty();
        console.log(operation);
        break;
      case 'currentHead':
        operation.output = linkedList.currentHead();
        console.log(operation);
        break;
      case 'listSize':
        operation.output = linkedList.listSize();
        console.log(operation);
        break;
      case 'insertAt':
        operation.output = linkedList.insertAt(
          operation.arguments.value,
          operation.arguments.position
        );
        console.log(operation);
        break;
      case 'removeKthNodeFromEnd':
        operation.output = linkedList.removeKthNodeFromEnd(
          linkedList.currentHead(),
          10
        );
        console.log(operation);
        break;
      // default:
      //   operation.output = linkedList.peek();
      //   console.log(operation);
    }
  });
};

LinkedListOperations();
