const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    if(!this.node) return null;

    let queueList = new ListNode(this.node.value);

    let currentNode = this.node;
    while(currentNode.next) {
      const currentQueueList = queueList;

      queueList = new ListNode(currentNode.next.value);
      queueList.next = currentQueueList;

      currentNode = currentNode.next;
    }

    return queueList;
  }

  enqueue(value) {
    if(!this.node) {
      this.node = new ListNode(value);
      return;
    }

    const currentQueue = this.node;
    this.node = new ListNode(value);
    this.node.next = currentQueue;
  }

  dequeue() {
    if(!this.node.next) {
      const deletedValue = this.node.value;
      this.node = null;
      return deletedValue;
    }

    let currentNode = this.node;
    while(currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const deletedValue = currentNode.next.value;
    currentNode.next = null;

    return deletedValue;
  }
}

module.exports = {
  Queue
};

const queue = new Queue;
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue);