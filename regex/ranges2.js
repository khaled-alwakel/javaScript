/*
  Regular Expression

  Ranges


  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString = "AaaaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(atozSmall));
console.log(myString.match(NotAtozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(NotAtozCapital));
console.log(myString.match(aAndcAnde));
console.log(myString.match(NotaAndcAnde));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecials));
console.log(myString.match(specials));