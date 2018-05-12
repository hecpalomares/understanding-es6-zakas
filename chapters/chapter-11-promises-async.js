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