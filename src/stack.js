const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  push(element) {
    const currStack = this.node;

    this.node = new ListNode(element);
    if(currStack) this.node.next = currStack;
  }

  pop() {
    const deletedValue = this.node.value;
    this.node.next ? this.node = this.node.next : null;
    return deletedValue;
  }

  peek() {
    return this.node.value;
  }
}

module.exports = {
  Stack
};

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);

console.log('stack=', stack);