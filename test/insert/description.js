const appropriateLeaves = require('./appropriateLeaves.js');
const handlesDuplicates = require('./handlesDuplicates.js');

module.exports = () => {
  it('Inserts nodes as appropriate leaves',appropriateLeaves);
  it('Handles duplicates as expected',handlesDuplicates);
};

