//* Hoisting and TDZ in Practice
//
// Variables
// console.log(x) // error
console.log(me); // undefined
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
//console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
//console.log(addArrow);
// console.log(addArrow(2, 3));
//
//function addDecl(a, b) {
//  return a + b;
//}
//
//const addExpr = function (a, b) {
//  return a + b;
//};
//
//var addArrow = (a, b) => a + b;
//const addArrow = (a, b) => a + b; // same like var
//
// Example
//console.log(undefined);
//if (!numProducts) deleteShoppingCart();
//
//var numProducts = 10;
//
//function deleteShoppingCart() {
//  console.log('All products deleted!');
//}
//
//var x = 1;
//let y = 2;
//const z = 3;
//
//console.log(x === window.x);
//console.log(y === window.y);
//console.log(z === window.z);