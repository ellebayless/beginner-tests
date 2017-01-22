function hello() {
  // Your code here! You may need to add in parameters in the parenthesis above!
  return("Hello World!");
}

function sum(num1, num2) {
  // Your code here! You may need to add in parameters in the parenthesis above!
  return(num1 + num2);
}

function billymaysify(str) {
  // Your code here! You may need to add in parameters in the parenthesis above!
  return str.toUpperCase() + '!!!';
}

function concat(arr, arr2) {
  // Your code here! You may need to add in parameters in the parenthesis above!
  return(arr.concat(arr2));
}

exports.hello = hello;
exports.sum = sum;
exports.billymaysify = billymaysify;
exports.concat = concat;
