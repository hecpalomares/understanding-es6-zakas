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
// entries() method: returns a two-item array (key and value) each time next() is called.
let colors = ["Red", "Green", "Yellow"];
let tracking = new Set([8527, 5290, 4129]);
let data = new Map();

data.set("name", "Hector");
data.set("age", 25);

// Returns 'index' and 'value'
for(let entry of colors.entries()) {
  console.log(entry);
}

// Return 'value' and 'value' siince its a Set
for(let entry of tracking.entries()) {
  console.log(entry);
}

// Returns the 'key' and 'value'
for(let entry of data.entries()) {
  console.log(entry);
}