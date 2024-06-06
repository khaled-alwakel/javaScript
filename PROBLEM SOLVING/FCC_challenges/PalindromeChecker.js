function palindrome(str) {
  let regex = /\s|_|\W/gi;

  let newStr = str
    .split(regex)
    .filter((ele) => ele !== "")
    .join("");

  let reversedStr = "";
  for (let i = newStr.length - 1; i >= 0; i--) reversedStr += newStr[i];

  if (newStr.toLowerCase() === reversedStr.toLocaleLowerCase()) return true;
  return false;
}

console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("five|_/|four")); // false
