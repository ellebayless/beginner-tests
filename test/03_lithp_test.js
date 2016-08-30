var expect = require('chai').expect;
var lithp = require('../workspace/03_lithp.js');


// We will create a function that takes all the s's and turn them into th's

describe("lithp", function() {
  xit('should return an empty string when given an empty string', function() {
    expect(lithp('')).to.equal('');
  });

  xit('should return the original string if it does not contain the character "s"', function() {
    expect(lithp('hello')).to.equal('hello');
  });

  xit('should return the character s to th', function() {
    expect(lithp('s')).to.equal('th');
  });

  xit('should return the character S to th', function() {
    expect(lithp('S')).to.equal('th');
  });

  xit('should return a modified string that contains one "s" to "th"', function() {
    expect(lithp("that's unacceptable")).to.equal("that'th unacceptable");
  });

  xit('should return a modified string that contains several instances of "s"', function() {
    expect(lithp('Sally sells seashells by the seashore')).to.equal("thally thellth theathhellth by the theathhore");
  });
});
