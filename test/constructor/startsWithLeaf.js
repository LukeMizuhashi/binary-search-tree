module.exports = () => {
  const uut = new BinaryTree();
  assert(uut.root.isLeaf(),'Root is not a leaf node');
};

