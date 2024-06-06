function myReplace(str, before, after) {
  let x = str.split(" ");
  for (let i = 0; i < x.length; i++) {
    if (x[i] === before) {
      if (x[i][0].toUpperCase() === x[i][0]) {
        after = after[0].toUpperCase() + after.slice(1);
        x.splice(i, 1, after);
      } else {
        after = after[0].toLowerCase() + after.slice(1);
        x.splice(i, 1, after);
      }
    }
  }
  return x.join(" ");
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("Let us go to the store", "store", "mall"));
