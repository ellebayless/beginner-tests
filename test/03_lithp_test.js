var expect = require('chai').expect;
var lithp = require('../solutions/03_lithp.js');

describe("lithp", function() {
  it('should return an empty string when given an empty string', function() {
    expect(lithp('')).to.equal('');
  });

  it('should return the original string if it does not contain the character "s"', function() {
    expect(lithp('hello')).to.equal('hello');
  });

  it('should return the character s to th', function() {
    expect(lithp('s')).to.equal('th');
  });

  it('should return the character S to th', function() {
    expect(lithp('S')).to.equal('th');
  });

  it('should return a modified string that contains one "s" to "th"', function() {
    expect(lithp("that's unacceptable")).to.equal("that'th unacceptable");
  });

  it('should return a modified string that contains several instances of "s"', function() {
    expect(lithp('Sally sells seashells by the seashore')).to.equal("thally thellth theathhellth by the theathhore");
  });
});
