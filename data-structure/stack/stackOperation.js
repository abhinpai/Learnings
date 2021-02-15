// Feel free to add new properties and methods to the class.
class MinMaxStack {
  stack = [];
  MinMaxStack() {
    this.stack = [];
  }

  peek() {
    return this.stack[0];
  }

  pop() {
    return this.stack.shift(0);
  }

  push(number) {
    this.stack.unshift(number);
  }

  getMin() {
    let min = this.stack[0];
    for (let i = 1; i < this.stack.length; i++) {
      if (this.stack[i] < min) {
        min = this.stack[i];
      }
    }
    return min;
  }

  getMax() {
    let max = this.stack[0];
    for (let i = 1; i < this.stack.length; i++) {
      if (this.stack[i] > max) {
        max = this.stack[i];
      }
    }
    return max;
  }
}

const operations = [
  { arguments: [5], method: 'push' },
  { arguments: [], method: 'getMin' },
  { arguments: [], method: 'getMax' },
  { arguments: [], method: 'peek' },
  { arguments: [7], method: 'push' },
  { arguments: [], method: 'getMin' },
  { arguments: [], method: 'getMax' },
  { arguments: [], method: 'peek' },
  { arguments: [2], method: 'push' },
  { arguments: [], method: 'getMin' },
  { arguments: [], method: 'getMax' },
  { arguments: [], method: 'peek' },
  { arguments: [], method: 'pop' },
  { arguments: [], method: 'pop' },
  { arguments: [], method: 'getMin' },
  { arguments: [], method: 'getMax' },
  { arguments: [], method: 'peek' },
];

const stackOperation = () => {
  let stack = new MinMaxStack();

  operations.forEach((operation) => {
    switch (operation.method) {
      case 'push':
        operation.output = stack.push(operation.arguments[0]);
        console.log(operation);
        break;
      case 'pop':
        operation.output = stack.pop();
        console.log(operation);
        break;
      case 'getMin':
        operation.output = stack.getMin();
        console.log(operation);
        break;
      case 'getMax':
        operation.output = stack.getMax();
        console.log(operation);
        break;
      default:
        operation.output = stack.peek();
        console.log(operation);
    }
  });
};

stackOperation();
