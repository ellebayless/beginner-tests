// this is an alternative solution to isLeapYear that is one line but the second
// is more readable for new developers

function isLeapYear(year) {
  return ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0))
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}
module.exports = isLeapYear;
