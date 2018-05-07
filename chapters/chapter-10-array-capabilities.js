// Improved Arrays: ES6 added several methods in order to interact with arrays.

// Array.of() method: always create an array containing its arguments, regardless
// of the number of arguments and type
let items = Array.of(1, 2, 3, "a", "b", "c");
console.log(items.length);  // 6
console.log(items[3]); // a

// Array.from() method: convert iterable objects (array-like) objects into real arrays
function addNumbers() {
  const args = Array.from(arguments);
  console.log(args);                            // [ 1, 2, 3, 4 ]
  let sum = args.reduce((a, b) => a + b, 0);    // can use .reduce method on an array
  return sum;
}

console.log(addNumbers(1, 2, 3, 4));  // 10

// find() and findIndex() methods: accepts a callback and an optional value to use for 'this' inside the callback
// find() returns the value
let numbers = [42, 12, 66, 27, 21, 15, 82];
console.log(numbers.find(n => n < 18)); // 12

// findIndex() returns the index where the value was found
console.log(numbers.findIndex(n => n > 50)); // 2

// fill() method: fills one or more array elements with a specific value
let filledArray = ["a", "b", "c"];
filledArray.fill("X");

console.log(filledArray); // [ 'X', 'X', 'X' ]

// copyWithin method: copy array element values from the array
let fibboArray = [1, 1, 2, 3, 5, 8, 13, 21, 34];

// paste values starting from index 3
// copy values starting from index 0
let notFibboArray = fibboArray.copyWithin(3, 0);

console.log(notFibboArray); // [ 1, 1, 2, 1, 1, 2, 3, 5, 8 ]

// Summary: 
// ES6 provided methods to make arrays more usefuls
// .of() and .from() methods, help to create arrays and convert array like elements to array
// .fill() and .copyWithin() methods, alter array elements in place
// .find() and .findIndex() useful for finding an element in an array that matches the criteria