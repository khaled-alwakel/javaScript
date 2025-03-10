/*
  - Map vs WeakMap
  "
    * WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  * Map     => Key Can Be Anything
  * WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; //* Override The Reference  [when i delete the reference memory wont delete it coz it's in map lets see what happened when i store it in weakmap]

console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "khaled");

wMapUser = null; //* Override The Reference []

console.log(myWeakMap);


