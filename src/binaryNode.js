module.exports = class BinaryNode {
  constructor(options) {
    options = options || {};

    this.allowsDuplicates = options.hasOwnProperty('allowsDuplicates') ?
        options.allowsDuplicates : false;

    if (options.comparator) {
      this.compare = options.comparator;
      this.compare.bind(this);
    }

    this.key = options.key; // Defaults to undefined
    this.value = options.value || null;

    this.left = options.left || null;
    this.right = options.right|| null;
    this.parent = options.parent || null;
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
        comparator: this.compare,
      });
      this.left.parent = this;

      this.right = new BinaryNode({
        allowsDuplicates: this.allowsDuplicates,
        comparator: this.compare,
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
};
