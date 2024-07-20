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
    if(this.node.data === data) {
      const leftBranch = this.node.left
      this.node = this.node.right;
      const currentNode = this.node.left;
      while(currentNode.left) {
        currentNode = currentNode.left;
      }
      currentNode.left = leftBranch;
    }

    let currentNode = this.node;
    if(this.has(data)) {
      while(currentNode) {
        if(data > currentNode.data) {
          if (currentNode.right.data === data) {
            const deletedNode = currentNode.right;
            if (deletedNode.right && deletedNode.left) {
              let lastInBranch = deletedNode.left;
              while(lastInBranch.right) {
                lastInBranch = lastInBranch.right
              }
              lastInBranch.right = deletedNode.right;
              currentNode.right = currentNode.right.left;
            } else if (deletedNode.right) {
              currentNode.right = deletedNode.right;
            } else if (deletedNode.left) {
              currentNode.right = deletedNode.left;
            } else {
              currentNode.right = null;
            }
            return;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          if (currentNode.left.data === data) {
            const deletedNode = currentNode.left;
            if(deletedNode.right && deletedNode.left) {
              let lastInBranch = deletedNode.right;
              while(lastInBranch.left) {
                lastInBranch = lastInBranch.left;
              }
              lastInBranch.left = deletedNode.left;
              currentNode.left = currentNode.left.right;
            } else if (deletedNode.left) {
              currentNode.left = deletedNode.left;
            } else if (deletedNode.right) {
              currentNode.left = deletedNode.right;
            } else {
              currentNode.left = null;
            }
            return;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }

  min() {
    if(!this.node.data) return null;

    let currentNode = this.node;
    while(currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if(!this.node.data) return null;

    let currentNode = this.node;
    while(currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};

// console.log('start\n');
// const tree = new BinarySearchTree;
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);

// console.log(tree);

// const fs = require('fs');
// const path = require('path');


// console.log(path.join(path.resolve(__dirname), 'binTree.txt'))
// const writeStream = fs.createWriteStream(path.join(path.resolve(__dirname), 'binTree.txt'))

// writeStream.write(`${JSON.stringify(tree)}`);
// writeStream.end()