function zip(arrOne, arrTwo) {
  var length;
  var newArr = [];

  if (arrOne.length > arrTwo.length) {
    length = arrOne.length;
  } else {
    length = arrTwo.length;
  }

  for (var i = 0; i < length; i++) {
    if (arrOne[i] !== undefined) newArr.push(arrOne[i]);
    if (arrTwo[i] !== undefined) newArr.push(arrTwo[i]);
  }

  return newArr;
}

module.exports = zip;
