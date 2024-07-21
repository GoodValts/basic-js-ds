const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let list = l;
  if (list.value === k) {
    list = list.next;
  }

  let currentNode = l;
  while(currentNode.next) {
    if(currentNode.next.value === k) {
      currentNode.next.next ? currentNode.next = currentNode.next.next : currentNode.next = null;
    } else {
      currentNode = currentNode.next;
    }
  }
  
  return list;
}

module.exports = {
  removeKFromList
};

const arr = [5,2,3,6,5,8,9,4,5];
const createList = (arr) => {
  const list = new ListNode(arr[0]);
  arr.shift();

  let currentNode = list;
  while(arr.length) {
    currentNode.next = new ListNode(arr[0]);
    currentNode = currentNode.next;
    arr.shift();
  }

  return list;
}

const list = createList(arr);

removeKFromList(list, 5);

console.log(list);

const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream(path.join(path.resolve(__dirname), 'list.txt'))

writeStream.write(`${JSON.stringify(list)}`);
writeStream.end()