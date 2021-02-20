const DoublyLinkedList = require('./doublyLinkedList');

const operations = [
  { arguments: [0], method: 'add' },
  { arguments: [1], method: 'add' },
  { arguments: [2], method: 'add' },
  { arguments: [3], method: 'add' },
  { arguments: [4], method: 'add' },
];

const doublyLinkedListOperations = () => {
  let linkedList = new DoublyLinkedList();
  operations.forEach((operation) => {
    if (operation.method === 'add') {
      linkedList.add(operation.arguments[0]);
    }
  });
  linkedList.print(linkedList.currentHead(), true)
};


doublyLinkedListOperations()