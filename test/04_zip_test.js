var expect = require('chai').expect;
var zip = require('../solutions/04_zip.js');


describe("zip", function() {
  it("should return an empty array", function() {
    expect(zip([], [])).to.deep.equal([]);
  });

  it("should return a zipped array", function() {
    expect(zip([1,2], ['a', 'b'])).to.deep.equal([1, 'a', 2, 'b']);
  });

  it("should return a longer zipped array", function() {
    expect(zip([1,2,3,4,5,6], ['a','b','c','d','e','f'])).to.deep.equal([1,'a',2,'b',3,'c',4,'d',5,'e',6,'f']);
  });

  it("should zip uneven arrays", function() {
    expect(zip([1,2,3,4], ['a', 'b'])).to.deep.equal([1,'a',2,'b',3,4]);
  });

  it("should zip uneven arrays when it is uneven the other direction", function() {
    expect(zip([1,2], ['a', 'b', 'c'])).to.deep.equal([1,'a',2,'b','c']);
  });

  it("should zip uneven arrays when one array is empty", function() {
    expect(zip([1,2,3], [])).to.deep.equal([1,2,3]);
  });

  it("should zip uneven arrays when the other array is empty", function() {
    expect(zip([], ['a','b','c'])).to.deep.equal(['a','b','c']);
  });

  it("should zip uneven arrays where one contains a 0", function() {
    expect(zip([0], ['a','b','c'])).to.deep.equal([0,'a','b','c']);
  });
});
