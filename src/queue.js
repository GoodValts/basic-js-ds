const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
  constructor() {
    this.node = null;
    this.lng = 0;
  }

  getUnderlyingList(el) {
    return this.node;
  }

  enqueue(el) {
    if (this.lng == 0){
      this.node = new ListNode(el);
    } else {
      let pnt = this.node;
      while(pnt.next){
        pnt = pnt.next;
      }
      pnt.next = new ListNode(el);
    }
    this.lng++;
  }

  dequeue() {
    if (this.lng != 0) {
      let node = this.node.value;
      this.node = this.node.next;
      return node;
    }
  }
}

module.exports = {
  Queue
};