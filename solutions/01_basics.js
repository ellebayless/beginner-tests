function hello(name) {
  var nounToGreet = name || "W"
  return "Hello World!";
}

function sum(numOne, numTwo) {
  return numOne + numTwo;
}

function billymaysify(str) {
  return str.toUpperCase() + "!!!";
}

function concat(arrOne, arrTwo) {
  for (var i = 0; i < arrTwo.length; i++) {
    arrOne.push(arrTwo[i]);
  }
  return arrOne;
}

exports.hello = hello;
exports.sum = sum;
exports.billymaysify = billymaysify;
exports.concat = concat;
