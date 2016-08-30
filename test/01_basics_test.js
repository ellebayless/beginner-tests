var expect = require('chai').expect;
var hello = require('../workspace/01_basics.js').hello;
var sum = require('../workspace/01_basics.js').sum;
var billymaysify = require('../workspace/01_basics.js').billymaysify;
var concat = require('../workspace/01_basics.js').concat;

// Start here! =D
describe("hello", function() {
  it("should return 'Hello World!'", function() {
    expect(hello()).to.equal("Hello World!");
  });
});

// Once you're ready to move on, just remove the x so that it reads it("should return 0", function() { and go down the list
describe("sum", function() {
  xit("should return 0", function() {
    expect(sum(0, 0)).to.equal(0)
  });

  xit("should return 2", function() {
    expect(sum(1, 1)).to.equal(2);
  });

  xit("should return 3.5", function() {
    expect(sum(1.5, 2)).to.equal(3.5);
  });

  xit("should return 1", function() {
    expect(sum(2, -1)).to.equal(1);
  });
});

describe("billymaysify", function() {
  xit("should return !!! when given an empty string input", function() {
    expect(billymaysify('')).to.equal("!!!");
  });

  xit("should return BUT WAIT! THERE'S MORE!!!", function() {
    expect(billymaysify("but wait! there's more")).to.equal("BUT WAIT! THERE'S MORE!!!");
  });

  xit("should return UNICORNS!!!", function() {
    expect(billymaysify("unicorns")).to.equal("UNICORNS!!!");
  });
});

describe("concat", function() {
  xit('should return an empty array', function() {
    expect(concat([], [])).to.deep.equal([]);
  });

  xit('should return the contents of the first array with the contents of the second when the second array is empty', function() {
    expect(concat([1,2,3], [])).to.deep.equal([1,2,3]);
  });

  xit('should return the contents of the first array with the contents of the second when the first array is empty', function() {
    expect(concat([], [1,2,3])).to.deep.equal([1,2,3]);
  });

  xit('should return the contents the second array concatenated to the first', function() {
    expect(concat(['a', true, 12], [1,2,3])).to.deep.equal(['a',true,12,1,2,3]);
  });
});
