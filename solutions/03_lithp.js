function lithp(str) {
  var strArr = str.toLowerCase().split('');
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === 's') {
      strArr[i] = 'th'
    }
  }
  return strArr.join('');
}

module.exports = lithp;
