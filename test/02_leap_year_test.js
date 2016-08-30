var expect = require('chai').expect;
var isLeapYear = require('../workspace/02_leap_year.js');

// A leap year occurs on every year that is divisible by 4
// but is not divisible by 100
// unless it is also divisible by 400

describe("isLeapYear", function() {
  xit("should return false when given 1", function() {
    expect(isLeapYear(1)).to.be.false;
  });

  xit("should return true when given 4", function() {
    expect(isLeapYear(4)).to.be.true;
  });

  xit("should return true when given 1984", function() {
    expect(isLeapYear(1984)).to.be.true;
  });

  xit("should return false when given 1900", function() {
    expect(isLeapYear(1900)).to.be.false;
  });

  xit("should return true when given 2000", function() {
    expect(isLeapYear(2000)).to.be.true;
  });

  xit("should return true when given 2016", function() {
    expect(isLeapYear(2016)).to.be.true;
  });
});
