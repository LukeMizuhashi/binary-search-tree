const BinarySearchTree = require('../src/constructor.js');
const assert = require('chai').assert;

describe('BinarySearchTree',() => {
  it('Starts with a leaf node as root',() => {
    const uut = new BinarySearchTree();
    assert(uut.root.isLeaf(),'Root is not a leaf node');
  });

  describe('BinarySearchTree.insert',() => {
    it('Inserts nodes as appropriate leaves',() => {
      const errorMessage = 'Does not insert nodes in expected locations';
      let uut;
     
      uut = new BinarySearchTree();
      uut.insert(0,'a');
      uut.insert(1,'b');
      uut.insert(2,'c');
      uut.insert(3,'d');
      uut.insert(4,'e');
      uut.insert(5,'f');
      uut.insert(6,'g');

      assert(uut.root.value === 'a',errorMessage);
      assert(uut.root.right.value === 'b',errorMessage);
      assert(uut.root.right.right.value === 'c',errorMessage);
      assert(uut.root.right.right.right.value === 'd',errorMessage);
      assert(uut.root.right.right.right.right.value === 'e',errorMessage);
      assert(uut.root.right.right.right.right.right.value === 'f',errorMessage);
      assert(uut.root.right.right.right.right.right.right.value === 'g',errorMessage);

      uut = new BinarySearchTree();
      uut.insert(6,'g');
      uut.insert(5,'f');
      uut.insert(4,'e');
      uut.insert(3,'d');
      uut.insert(2,'c');
      uut.insert(1,'b');
      uut.insert(0,'a');

      assert(uut.root.value === 'g',errorMessage);
      assert(uut.root.left.value === 'f',errorMessage);
      assert(uut.root.left.left.value === 'e',errorMessage);
      assert(uut.root.left.left.left.value === 'd',errorMessage);
      assert(uut.root.left.left.left.left.value === 'c',errorMessage);
      assert(uut.root.left.left.left.left.left.value === 'b',errorMessage);
      assert(uut.root.left.left.left.left.left.left.value === 'a',errorMessage);

      uut = new BinarySearchTree();
      uut.insert(3,'d');
      uut.insert(5,'f');
      uut.insert(6,'g');
      uut.insert(4,'e');
      uut.insert(1,'b');
      uut.insert(2,'c');
      uut.insert(0,'a');

      assert(uut.root.value === 'd',errorMessage);
      assert(uut.root.right.value === 'f',errorMessage);
      assert(uut.root.right.right.value === 'g',errorMessage);
      assert(uut.root.right.left.value === 'e',errorMessage);
      assert(uut.root.left.value === 'b',errorMessage);
      assert(uut.root.left.right.value === 'c',errorMessage);
      assert(uut.root.left.left.value === 'a',errorMessage);
    });

    it('Handles duplicates as expected',() => {
      uut = new BinarySearchTree();
      uut.insert(0,'a');
      assert.throws(
        () => {
          uut.insert(0,'a');
        }
      );
    });

  });

  describe('BinarySearchTree.maxNode',() => {
    it('Returns largest value node',() => {
      const uut = new BinarySearchTree();
      uut.insert(0,'a');
      uut.insert(1,'b');
      uut.insert(2,'c');
      uut.insert(3,'d');
      uut.insert(4,'e');
      uut.insert(5,'f');
      uut.insert(6,'g');
      assert(uut.maxNode.value === 'g','Does not return largest value node');
    });
  });

  describe('BinarySearchTree.minNode',() => {
    it('Returns smallest value node',() => {
      const uut = new BinarySearchTree();
      uut.insert(0,'a');
      uut.insert(1,'b');
      uut.insert(2,'c');
      uut.insert(3,'d');
      uut.insert(4,'e');
      uut.insert(5,'f');
      uut.insert(6,'g');
      assert(uut.minNode.value === 'a','Does not return smallest value node');
    });
  });

  describe('BinarySearchTree.maxValue',() => {
    it('Returns largest value',() => {
      const uut = new BinarySearchTree();
      uut.insert(0,'a');
      uut.insert(1,'b');
      uut.insert(2,'c');
      uut.insert(3,'d');
      uut.insert(4,'e');
      uut.insert(5,'f');
      uut.insert(6,'g');
      assert(uut.maxValue === 'g','Does not return largest value');
    });
  });

  describe('BinarySearchTree.minValue',() => {
    it('Returns smallest value',() => {
      const uut = new BinarySearchTree();
      uut.insert(0,'a');
      uut.insert(1,'b');
      uut.insert(2,'c');
      uut.insert(3,'d');
      uut.insert(4,'e');
      uut.insert(5,'f');
      uut.insert(6,'g');
      assert(uut.minValue === 'a','Does not return smallest value');
    });
  });
});

