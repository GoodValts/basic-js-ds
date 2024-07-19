const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    if(!this.node) {
      this.node = new Node(data);
    } else {
      let currentNode = this.node;
      
      while (currentNode) {
        if (data < currentNode.data) {
          if(!currentNode.left) {
            currentNode.left = new Node(data);
            return;
          }
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          if(!currentNode.right) {
            currentNode.right = new Node(data);
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    if(!this.node) return false;

    let currentNode = this.node;
    while (currentNode) {
      if(currentNode.data === data) return true;
      
      currentNode.data > data
        ? currentNode = currentNode.left
        : currentNode = currentNode.right;
    }

    return false;
  }

  find(data) {
    if(!this.node) return null;

    let currentNode = this.node;
    while (currentNode) {
      if(currentNode.data === data) return currentNode;
      
      currentNode.data > data
        ? currentNode = currentNode.left
        : currentNode = currentNode.right;
    }

    return null;
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

console.log('start\n');
const tree = new BinarySearchTree;
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);

console.log(tree.has(7));

// const fs = require('fs');
// const path = require('path');


// console.log(path.join(path.resolve(__dirname), 'binTree.txt'))
// const writeStream = fs.createWriteStream(path.join(path.resolve(__dirname), 'binTree.txt'))

// writeStream.write(`${JSON.stringify(tree)}`);
// writeStream.end()