// Promise: Placeholder for the result of asynchronous operation.

// Pending state: Async operation hasn't completed yet. 
// Fulfilled state: Async operation has completed successfully.
// Rejected state: Async operation didn't complete successfully due to either an error or some other cause.

// .then() method: present in all promieses, takes two callback functions: .then(cbFulfilled, cbRejected)

// Creating a new promise simulating a random resolve or reject resolved at .5 seconds
const myPromise = new Promise((resolve, reject) => {

  // Executor runs immediately
  let a = 3;
  let b = 5;
  let aPlusb = a + b;
  console.log("Step 1: This is executed immediately, a + b = ", aPlusb);

  let randomNumber = Math.random();

  // A 'job' is added to the queue called 'job scheduling'. resolve(), reject() and setTimeOut() are examples of 'jobs
  // A 'job means, dont execute this right now, execute it later
  // The 'job' is added to be executed after the executor has been completed
  setTimeout(() => {
    if(randomNumber > 0.3) {
      resolve("Step 3: Hey, resolving a new promise! :D ");
    } else {
      reject(Error("Step 3: Sorry, rejecting the promise :( "));
    }
  }, 500);
});

// MyPromise solving for both callbacks, the fulfilled and the rejected.
// myPromise.then(resolveData => {
//   console.log(resolveData)
// }, error => {
//   console.log(error);
// });

// MyPromise solving for both callbacks, .then() method only receiving the fulfilled. .catch() solves the reject.
myPromise.then(resolveData => { 
  console.log(resolveData); 
}).catch(error => {
  console.log(error)
});

console.log("Step 2: after the executor before the 'jobs'");


// Settled Promises: Represent Promises to represent a single value.
let promise1 = Promise.resolve("Resolved");
let promise2 = Promise.reject("Reject");

promise1.then(value => console.log(value));     // Resolved
promise2.catch(value => console.log(value));    // Rejected

// promise1.catch(value => console.log(value));     // Error, unhandled promise
// promise2.then(value => console.log(value));      // Error, unhandled promise

// Chaining Promises: acomplish more complex asynchronous behaivor executing promises one after the other
let p1 = new Promise((resolve, reject) => {
  resolve(42);
});

p1.then(value => {
  console.log(value)
}).then(() => {
  console.log("Finish");
});

// Return values in Promises chains: pass data from one promise to the next with 'return'
let p2 = new Promise((resolve, reject) => {
  resolve("Hi my name is ");
});

p2.then(value => {
  console.log(value);
  return value + "Hector";
}).then(value => {
  console.log(value);
});

// Promise.all(): accepts an array of promises to monitor and returns a promise thats is resolved when all promises are resolved.
let promisePartial1 = new Promise((resolve, reject) => {
  resolve("A");
});

let promisePartial2 = new Promise((resolve, reject) => {
  resolve("B");
});

let promisePartial3 = new Promise((resolve, reject) => {
  resolve("C");
});

let promiseMerge = Promise.all([
  promisePartial1,
  promisePartial2,
  promisePartial3
]);

promiseMerge.then(result => {
  console.log(Array.isArray(result));
  console.log(result[0]); // A
  console.log(result[1]); // B
  console.log(result[2]); // C
});

// If a single promise is rejected the returned promise is rejected immedediately without waiting the rest of the promises
let promisePartial4 = new Promise((resolve, reject) => {
  resolve("A");
});

let promisePartial5 = new Promise((resolve, reject) => {
  reject("B");
});

let promisePartial6 = new Promise((resolve, reject) => {
  resolve("C");
});

let promiseMerge2 = Promise.all([
  promisePartial4,
  promisePartial5,
  promisePartial6
]);

promiseMerge2.catch(result => {
  console.log(Array.isArray(result));
  console.log(result); // B
});

// Promise.race(): accepts an array of promises to monitor and returns a promise thats is resolved when the first promise is resolved.
let promiseRace = Promise.race([
  promisePartial1,
  promisePartial2,
  promisePartial3
]);

promiseRace.then(value => console.log("Promise Race Value: ", value));  // A

// --- SUMMARY --- //
// Promises are designed to improve asynchronous programming in JavaScript by giving control and composability over async operations, in a higher 
// regard that events or callbacks can do.

// Promises schedule a job to be added to the JavaScript engine job queue for future execution. A second job queue tracks for the resolve or rejected state.

// Promises have three states: pending, fulfilled and rejected. 
// The .then() method assigns a fulfilled and rejected handler. The .catch() assigns only a rejected handler.

// .then() method can be used to chain Promises and pass information between them. 
// Promise.race() and Promise.all() monitor the progress of multiple promises and respond accordingly.

// Many new web API's are built on top of promises.