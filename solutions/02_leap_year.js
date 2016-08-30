// function isLeapYear(year) {
//   return ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0))
// }

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
