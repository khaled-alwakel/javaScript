function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr.slice(i);
    else continue;
  }
  return [];
}
console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
); // [1,2,3]

//dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
