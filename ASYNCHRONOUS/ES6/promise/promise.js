/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

//* callback function to initialize promise which accept 2 callback functions [resolve,reject]as arguments
// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );
// console.log(myPromise);

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let connect = true;
    if (connect) {
        resolveFunction("Connection Established");
    } else {
        rejectFunction(Error("Connection Failed"));
    }
});

console.log(myPromise);

//   let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
//   let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

//   myPromise.then(resolver, rejecter);

// then is solution of callback hell
myPromise.then(

    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
);