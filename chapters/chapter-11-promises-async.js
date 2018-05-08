// Promise: Placeholder for the result of asynchronous operation.

// Pending state: Async operation hasn't completed yet. 
// Fulfilled state: Async operation has completed successfully.
// Rejected state: Async operation didn't complete successfully due to either an error or some other cause.

// .then() method: present in all promieses, takes two callback functions: .then(cbFulfilled, cbRejected)

// Creating a new promise simulating a random resolve or reject resolved at .5 seconds
const myPromise = new Promise((resolve, reject) => {

  let randomNumber = Math.random();

  setTimeout(() => {
    if(randomNumber > 0.5) {
      resolve("Hey, resolving a new promise! :D ");
    } else {
      reject(Error("Sorry, rejecting the promise :( "));
    }
  }, 500);
});

// MyPromise solving for both callbacks, the fulfilled and the rejected.
myPromise.then(resolveData => {
  console.log(resolveData)
}, error => {
  console.log(error);
});

// MyPromise solving for both callbacks, .then() method only receiving the fulfilled. .catch() solves the reject.
myPromise.then(resolveData => { 
            console.log(resolveData); 
          }).catch(error => {
            console.log(error)
          });