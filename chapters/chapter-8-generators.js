/* Iterators: objects with specific interface designed for iteration.
*  All iterators objects have a next() method that returns the result object.
*  Result object has two properties:
*  1. Value: which is the value of the object
*  2. Done, boolean that return true when there are no more objects to return
*/

/* Generators: is a function that returns an iterator. 
*  Generator functions are indicated with a (*) after the 'function' keyword, and use the new 'yield keyword'.
*  'yield' specifies the value that should return when next() is called. 
*  Generator functions stop executing once a 'yield' value is returned.
*/

function *createIterator(items) {
  for(let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

let iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Generator Object Methods: Since generators are function, they can serve as a function of a Object.
let objectX = {
  *createIterator(items) {
    for(let i = 0; i < items.length; i++) {
      yield items[i];
    }
  }
};

let iteratorObjX = objectX.createIterator(['a', 'b', 'c']);

console.log(iteratorObjX.next());
console.log(iteratorObjX.next());
console.log(iteratorObjX.next());
console.log(iteratorObjX.next());

// For..of loops: for-of loops are good for iterating collections to track less variables that for-loop.
let objectY = {
  *createIterator(items) {
    for(let item of items) {
      yield item;
    }
  }
};

let iteratorObjY = objectY.createIterator(['x', 'y', 'z']);

console.log(iteratorObjY.next());
console.log(iteratorObjY.next());
console.log(iteratorObjY.next());
console.log(iteratorObjY.next());

// Built-In iterators
let colors = ["Red", "Green", "Yellow"];
let tracking = new Set([8527, 5290, 4129]);
let data = new Map();

data.set("name", "Hector");
data.set("age", 25);

// entries() method: returns a two-item array (key and value) each time next() is called.

// Arrays, returns array containing 'index' and 'value'
for(let entry of colors.entries()) {  // [ 0, 'Red' ], [ 1, 'Green' ], [ 2, 'Yellow' ]
  console.log(entry);
}

// Set, returns array containing 'value' and 'value' since its a Set
for(let entry of tracking.entries()) { // [ 8527, 8527 ], [ 5290, 5290, ], [ 4129, 4129,]
  console.log(entry);
}

// Map, returns array containing the 'key' and 'value'
for(let entry of data.entries()) {    // [ 'name', 'Hector' ], [ 'age', 25 ]
  console.log(entry);
}

// values() method: returns the values stored in the collection
// Arrays, returns the exact value
for(let value of colors) {            // Red, Green, Yellow 
  console.log(value);
}

// Set, returns the exact value
for(let value of tracking.values()) { // 8527, 5290, 4129
  console.log(value);
}

// Map, returns the exact value
for(let value of data.values()) {     // Hector, 25
  console.log(value);
}

// keys() method: returns the key present in the collection
for(let keys of colors.keys()) {     // 0, 1, 2
  console.log(keys);
}

// Set, returns the exact keys
for(let keys of tracking.keys()) {  // 8527, 5290, 4129
  console.log(keys);
}

// Map, returns the exact keys
for(let keys of data.keys()) {    // name, age  
  console.log(keys);
}

// Default iterators: used by for-of loop when no iterator is specified
// arrays and sets -> values()
// maps -> entries()

// Advanced Iterator Functionality
// Passing Arguments to iterators: Passing an argument replace the value of the iterator.
function *createIteratorArgs() {
  let first = yield 1;
  let second = yield first + 2;
  yield second + 3;
}

let iteratorArgs = createIteratorArgs();

console.log(iteratorArgs.next());   // { value: 1, done: false }
console.log(iteratorArgs.next(4));  // { value: 6, done: false }
console.log(iteratorArgs.next(5));  // { value: 8, done: false }
console.log(iteratorArgs.next(5));  // { value: undefined, done: true }

// Return Statements: Since iterators are functions, it can return undefined value or even a value itself.
function* createIteratorReturn() {
  yield 1;
  yield 2;
  return 'a';
  yield 3;
}

let iteratorReturn = createIteratorReturn();

console.log(iteratorReturn.next()); // { value: 1, done: false }
console.log(iteratorReturn.next()); // { value: 2, done: false }
console.log(iteratorReturn.next()); // { value: 'a', done: true }

// Delegating iterators: Combine values from two iterators into one.
function *createNumberIterator() {
  yield 1;
  yield 2;
}

function *createColorIterators() {
  yield "green";
  yield "blue";
}

function *createCombinatedIterator() {
  yield *createNumberIterator();
  yield *createColorIterators();
  yield true;
}

let combIterator = createCombinatedIterator();

console.log(combIterator.next());
console.log(combIterator.next());
console.log(combIterator.next());
console.log(combIterator.next());
console.log(combIterator.next());
console.log(combIterator.next());

// Asynchronous Task Runner with Data
function run(taskDef) {
  // define the iterator 
  let task = taskDef();

  // start the task
  let result = task.next();

  // recursive function to keep calling next()
  function step() {
    if(!result.done) {
      result = task.next(result.value);
      step();
    }
  }

  step(); // Start the process
}

function *funcWithData() {
  let value = yield 1;
  console.log(value);
  value = yield value + 3;
  console.log(value);
}

run(funcWithData);

// Summary
// Iterators provide a simple way to return a sequence of values

// 'for-of' loop return a series of values in a loop. Easier to use than the normal 'for' loop no need
// to track values and know where to end it

// default iterators make easy to access the content of collections such as arrays, maps and sets

// Generators: special function that automatically creates an iterator when called. Indicated with an (*)
// 'yield' keyword to return the value for each successive call to the next() method

// The most interesting is creating cleanr-looking asynchronous code
// Replacing callbacks with 'yield' yo wait for asynchornous operations