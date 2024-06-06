function rot13(str) {
  let regex = /\s|_|\W/gi;
  return str
    .split("")
    .map((ele, index) =>
      str.match(regex).includes(ele) ? ele : str.charCodeAt(index)
    )
    .map((ele) =>
      typeof ele === "number" && ele - 13 < 65
        ? ele + 13
        : typeof ele === "number" && ele - 13 >= 65
        ? ele - 13
        : ele
    )
    .map((ele) => (typeof ele === "number" ? String.fromCharCode(ele) : ele))
    .join("");
}

console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // "FREE PIZZA!"
