var expect = require('chai').expect;
var hello = require('../solutions/01_basics.js').hello;
var sum = require('../solutions/01_basics.js').sum;
var billymaysify = require('../solutions/01_basics.js').billymaysify;
var concat = require('../solutions/01_basics.js').concat;

describe("hello", function() {
  it("should return 'Hello World!'", function() {
    expect(hello()).to.equal("Hello World!");
  });
});

describe("sum", function() {
  it("should return 0", function() {
    expect(sum(0, 0)).to.equal(0)
  });

  it("should return 2", function() {
    expect(sum(1, 1)).to.equal(2);
  });

  it("should return 3.5", function() {
    expect(sum(1.5, 2)).to.equal(3.5);
  });

  it("should return 1", function() {
    expect(sum(2, -1)).to.equal(1);
  });
});

describe("billymaysify", function() {
  it("should return !!! when given an empty string input", function() {
    expect(billymaysify('')).to.equal("!!!");
  });

  it("should return BUT WAIT! THERE'S MORE!!!", function() {
    expect(billymaysify("but wait! there's more")).to.equal("BUT WAIT! THERE'S MORE!!!");
  });

  it("should return UNICORNS!!!", function() {
    expect(billymaysify("unicorns")).to.equal("UNICORNS!!!");
  });
});

describe("concat", function() {
  it('should return an empty array', function() {
    expect(concat([], [])).to.deep.equal([]);
  });

  it('should return the contents of the first array with the contents of the second when the second array is empty', function() {
    expect(concat([1,2,3], [])).to.deep.equal([1,2,3]);
  });

  it('should return the contents of the first array with the contents of the second when the first array is empty', function() {
    expect(concat([], [1,2,3])).to.deep.equal([1,2,3]);
  });

  it('should return the contents the second array concatenated to the first', function() {
    expect(concat(['a', true, 12], [1,2,3])).to.deep.equal(['a',true,12,1,2,3]);
  });
});
