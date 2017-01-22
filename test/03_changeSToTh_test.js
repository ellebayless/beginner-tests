var expect = require('chai').expect;
var changeSToTh = require('../workspace/03_changeSToTh.js');


// We will create a function that takes all the s's and turn them into th's

describe("changeSToTh", function() {
  it('should return an empty string when given an empty string', function() {
    expect(changeSToTh('')).to.equal('');
  });

  it('should return the original string if it does not contain the character "s"', function() {
    expect(changeSToTh('hello')).to.equal('hello');
  });

  it('should return the character s to th', function() {
    expect(changeSToTh('s')).to.equal('th');
  });

  it('should return the character S to th', function() {
    expect(changeSToTh('S')).to.equal('th');
  });

  it('should return a modified string that contains one "s" to "th"', function() {
    expect(changeSToTh("that's unacceptable")).to.equal("that'th unacceptable");
  });

  it('should return a modified string that contains several instances of "s"', function() {
    expect(changeSToTh('Sally sells seashells by the seashore')).to.equal("thally thellth theathhellth by the theathhore");
  });

  it('should return a modified string when the input contains two s in a row', function() {
    expect(changeSToTh('Assumption')).to.equal('aththumption');
  });
});
