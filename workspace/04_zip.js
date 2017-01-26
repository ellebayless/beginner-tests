function zip(arr1, arr2) {
  var newArr = [];
  var length;
  // Ternary Operator:
  //If arr1.length is greater than arr2.length (?), then length = arr1.length.
  // Otherwise (:) length = arr2.length
  length = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (var i = 0; i < length; i++) {
    if (arr1[i]) newArr.push(arr1[i]);
    if (arr2[i]) newArr.push(arr2[i]);
  }
  return(newArr);
}

module.exports = zip;
