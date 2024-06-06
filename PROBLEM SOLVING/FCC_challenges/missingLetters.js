function fearNotLetter(str) {
  let arr = str.split("");
  let ascii = str.charCodeAt(0);
  for (let i = 0; i < arr.length; i++) {
    if (str.charCodeAt(i) === ascii + i) {
      continue;
    } else {
      let x = str.charCodeAt(i) - 1;
      return String.fromCharCode(x);
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce")); //d

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
