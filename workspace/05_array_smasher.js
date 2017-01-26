function arraySmasher(arr1) {
  var newArr = [];

for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr1[i].length; j++) {
  newArr.push(arr1[i][j]);
  }
}
return(newArr);
}

module.exports = arraySmasher;
