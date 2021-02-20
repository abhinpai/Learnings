const LinkedList = require('./linkedlist');

class LinkedListLoopFinder extends LinkedList {
  constructor() {
    super();
  }

  findLoop(head) {
    let node = isLoopPresent(head);
  }

  isLoopPresent = (head) => {
    let p = head;
    let q = head;

    while (p && q && q.next) {
      p = p.next;
      q = q.next.next;
      if (p === q) {
        return p;
      }
    }

    return null;
  };
}

const nodes = [
  { id: '0', next: '1', value: 0 },
  { id: '1', next: '2', value: 1 },
  { id: '2', next: '3', value: 2 },
  { id: '3', next: '4', value: 3 },
  { id: '4', next: '5', value: 4 },
  { id: '5', next: '6', value: 5 },
  { id: '6', next: '7', value: 6 },
  { id: '7', next: '8', value: 7 },
  { id: '8', next: '9', value: 8 },
  { id: '9', next: '4', value: 9 },
];

const findLookInLinkedList = () => {
  let  p = new Map();
  p.
  let linkedList = new LinkedListLoopFinder();
  nodes.forEach((x) => {
    linkedList.add(x);
  });

  const isLoopPresent = linkedList.isLoopPresent(linkedList.currentHead());
  console.log(isLoopPresent);
};
findLookInLinkedList();
