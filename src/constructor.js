const BinaryNode = require('./binaryNode.js');

module.exports = class BinaryTree {
  constructor(options) {
    if (options instanceof BinaryNode) {
      this.root = options;
    } else {
      this.root = new BinaryNode(options);
    }
  }

  insert(key,value) {
    const insertionLocation = this.search(key);

    if (insertionLocation.isLeaf()) {
      insertionLocation.set(key,value);
    } else {
      if (insertionLocation.allowsDuplicates) {
        insertionLocation.set(value);
      } else {
        throw new Error(`Key ${key} already exists in tree`);
      }
    }

  }

  remove() {
  }

  get maxNode() {
    let currentNode = this.root;
    while (!currentNode.isLeaf()) {
      currentNode = currentNode.right;
    }
    return currentNode.parent;
  }

  get minNode() {
    let currentNode = this.root;
    while (!currentNode.isLeaf()) {
      currentNode = currentNode.left;
    }
    return currentNode.parent;
  }

  get maxValue() {
    return this.maxNode.value;
  }

  get minValue() {
    return this.minNode.value;
  }

  search(key) {
    let currentNode = this.root;
    while (!currentNode.isLeaf()) {
      let comparison = currentNode.compare(key);
      if (comparison < 0) {
        currentNode = currentNode.left; 
      } else if (comparison == 0) {
        return currentNode;
      } else if (comparison > 0) {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }
};

