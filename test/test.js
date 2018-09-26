global.BinaryTree = require('../src/constructor.js');
global.BinaryNode = require('../src/binaryNode.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeInsert = require('./insert/description.js');
const describeMaxNode = require('./maxNode/description.js');
const describeMinNode = require('./minNode/description.js');
const describeMaxValue = require('./maxValue/description.js');
const describeMinValue = require('./minValue/description.js');
const describeRemove = require('./remove/description.js');

describe('BinaryTree',() => {

  describeConstructor();
  describe('BinaryTree.insert',describeInsert);
  describe('BinaryTree.maxNode',describeMaxNode);
  describe('BinaryTree.minNode',describeMinNode);
  describe('BinaryTree.maxValue',describeMaxNode);
  describe('BinaryTree.minValue',describeMinValue);
  describe('BinaryTree.remove',describeRemove);
});

