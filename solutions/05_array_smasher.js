function arraySmasher(arrOfArrs) {
  var newArr = [];
  for (var i = 0; i < arrOfArrs.length; i++) {
    for (var j = 0; j < arrOfArrs[i].length; j++) {
      newArr.push(arrOfArrs[i][j]);
    }
  }
  return newArr;
}

module.exports = arraySmasher;
