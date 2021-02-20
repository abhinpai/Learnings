const LinkedList = require('./linkedlist');

class RecusrsiveTraverse extends LinkedList {
  constructor() {
    super();
  }
  recursive(head) {
    if (!head.next) return;
    console.log(head);
    this.recursive(head.next);
  }
}

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
];

const caller = () => {
  let linkedList = new RecusrsiveTraverse();
  operations.forEach((operation) => {
    if (operation.method === 'add') linkedList.add(operation.arguments[0]);
  });
  linkedList.recursive(linkedList.currentHead());
};

caller();
