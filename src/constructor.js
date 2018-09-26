module.exports = class BinaryTree {
  constructor(options) {
    options = options ||{};

    options.allowsDuplicates = options.hasOwnProperty('allowsDuplicates') ?
        options.allowsDuplicates : false;

    this.root = new BinaryNode({
      allowsDuplicates: options.allowsDuplicates,
    });
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

class BinaryNode {
  constructor(options) {
    options = options || {};

    this.allowsDuplicates = options.hasOwnProperty('allowsDuplicates') ?
        options.allowsDuplicates : false;

    this.key = options.key; // Defaults to undefined
    this.value = options.value || null;

    this.left = options.left || null;
    this.right = options.right|| null;
    this.parent = options.parent || null;

    this.compare = options.comparator || this.compare;
  }

  isLeaf() {
    return this.value === null;
  }

  set(...args) {

    let key = undefined;
    let value = undefined;
    if (args.length == 1) {
      key = null;
      value = args[0];
    } else if (args.length == 2) {
      key = args[0];
      value = args[1];
    } else {
      throw new Error(
        'BinaryNode.set must be called as either BinaryNode.set(value) or '
      + 'BinaryNode.set(key,value)'
      );
    }

    if (key !== undefined && key !== null) {
      if (!this.isLeaf()) {
        throw new Error('Can not set key of non-leaf BinaryNode.');
      }
      this.key = key;
    }

    if (this.isLeaf()) {
      this.left= new BinaryNode({
        allowsDuplicates: this.allowsDuplicates,
      });
      this.left.parent = this;
      this.right = new BinaryNode({
        allowsDuplicates: this.allowsDuplicates,
      });
      this.right.parent = this;
      if (this.allowsDuplicates) {
        this.value = [];
      }
    }

    if (this.allowsDuplicates) {
      this.value.push(value);
    } else {
      this.value = value;
    }
  }

  compare(key) {
    if (key < this.key) {
      return -1;
    } else if (key == this.key) {
      return 0;
    } else if (key > this.key) {
      return 1;
    } else {
      throw new Error(
        `${key} is neither less than, greater than, nor equal to ${this.key}`
      );
    }
  }

}

