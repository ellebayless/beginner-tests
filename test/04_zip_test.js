var expect = require('chai').expect;
var zip = require('../workspace/04_zip.js');


// we are going to combine two arrays like a zipper!

describe("zip", function() {
  xit("should return an empty array", function() {
    expect(zip([], [])).to.deep.equal([]);
  });

  xit("should return a zipped array", function() {
    expect(zip([1,2], ['a', 'b'])).to.deep.equal([1, 'a', 2, 'b']);
  });

  xit("should return a longer zipped array", function() {
    expect(zip([1,2,3,4,5,6], ['a','b','c','d','e','f'])).to.deep.equal([1,'a',2,'b',3,'c',4,'d',5,'e',6,'f']);
  });

  xit("should zip uneven arrays", function() {
    expect(zip([1,2,3,4], ['a', 'b'])).to.deep.equal([1,'a',2,'b',3,4]);
  });

  xit("should zip uneven arrays when it is uneven the other direction", function() {
    expect(zip([1,2], ['a', 'b', 'c'])).to.deep.equal([1,'a',2,'b','c']);
  });

  xit("should zip uneven arrays when one array is empty", function() {
    expect(zip([1,2,3], [])).to.deep.equal([1,2,3]);
  });

  xit("should zip uneven arrays when the other array is empty", function() {
    expect(zip([], ['a','b','c'])).to.deep.equal(['a','b','c']);
  });

  xit("should zip uneven arrays where one contains a 0", function() {
    expect(zip([0], ['a','b','c'])).to.deep.equal([0,'a','b','c']);
  });
});
