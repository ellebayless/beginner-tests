function isLeapYear(year) {
  // Your code here! You may need to add in parameters in the parenthesis above!
  if (year % 400 === 0){
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0){
    return true;
  } else {
    return false;
  }
}
module.exports = isLeapYear;
