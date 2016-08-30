var expect = require('chai').expect;
var arraySmasher = require('../workspace/05_array_smasher.js');


// Hulk smashes 2-dimensional arrays! Let's make them one flattend array! Roar!

describe("arraySmasher", function() {
  xit("should return an empty array when given an empty array", function(){
    expect(arraySmasher([])).to.deep.equal([]);
  });

  xit("should return [1,2,3] when given [[1,2,3]]", function() {
    expect(arraySmasher([[1,2,3]])).to.deep.equal([1,2,3]);
  });

  xit("should return [1,2,3] when given [[1,2,3]]", function() {
    expect(arraySmasher([[1,2,3], ['a','b','c']])).to.deep.equal([1,2,3,'a','b','c']);
  });

  xit("should return a smashed array when given arrays of different lengths", function() {
    expect(arraySmasher([[1,2,3], ['a']])).to.deep.equal([1,2,3,'a']);
  });

  xit("should smash a lot of arrays", function() {
    expect(arraySmasher([[1],[2],[3],[4],[5]])).to.deep.equal([1,2,3,4,5]);
  });
});
