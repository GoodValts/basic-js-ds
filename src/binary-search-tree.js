const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(el){
    this.data = el;
    this.small = null;
    this.big = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(el) {
    function newEl(root, el){
      if (root === null){
        return new Node(el);
      } else if (root.el === el){
        return root;
      } else if (el < root.el){
        root.small = newEl(root.small, el);
      } else {
        root.big = newEl(root.big, el);
      }

      return root;
    }  

    this.node = newEl(this.node, el); 
  }

  has(el) {
    function isEl(root, el){
      if (root === null){
        return false;
      } else if (root.data === el){
        return true;
      } else if (el < root.data){
        return isEl(root.small, el);
      } else {
        return isEl(root.big, el);
      }
    }
    
    return isEl(this.node, el);
  }

  find(el) {
    function findEl(root, el){
      if (root === null){
        return null;
      } else if (root.data === el){
        return root;
      } else if (el < root.data){
        return findEl(root.small, el);
      } else {
        return findEl(root.big, el);
      }
    }
    return findEl(this.node, el);
  }

  remove() {
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