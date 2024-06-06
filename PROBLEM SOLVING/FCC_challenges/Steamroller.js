function steamrollArray(arr) {
  let myArr = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      myArr.push(...steamrollArray(item));
    } else {
      myArr.push(item);
    }
  }
  return myArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); 
