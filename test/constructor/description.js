const allowsDuplicates = require('./allowsDuplicates.js');
const startsWithLeaf = require('./startsWithLeaf.js');

module.exports = () => {
  it('Starts with a leaf node as root',startsWithLeaf);
  it('Propogates options.allowsDuplicates as expected',allowsDuplicates);
};

