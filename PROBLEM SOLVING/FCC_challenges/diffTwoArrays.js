function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// function diffArray(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) continue;
//     else newArr.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.includes(arr2[i])) continue;
//     else newArr.push(arr2[i]);
//   }
//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 66, 4])); //[5,66,4]
// console.log(
//   diffArray(
//     ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// ); // ["pink wool"]
// console.log(
//   diffArray(
//     ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// ); //["pink wool", "diorite"]
// console.log(
//   diffArray(
//     ["andesite", "grass", "dirt", "dead shrub"],
//     ["andesite", "grass", "dirt", "dead shrub"]
//   )
// ); //[]
