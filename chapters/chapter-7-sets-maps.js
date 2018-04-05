/* Sets: ordered list of values that cannot contain duplicates */

// Creating Sets with new Set() method
let set = new Set();

// Adding elements to the Set with .add() method
set.add(5),
set.add("5");

// Size is a property inside the Set to know it's length
console.log(set.size);  // 2

// Sets don't coerce values enabling that multiple objects be treated as different items
set.add({});
set.add({});
console.log(set.size);  // 4, multiple objects are unique. Not converted to strings

set.add(5);
console.log(set.size);  // 4, since 5 was already added at line 7

let set2 = new Set([1, 2, 3, 4, 5, 5, 4, 3]);
console.log(set2.size); // 5, the duplicated 5, 4, 3 are discarded

// Test if a value is contained on a Set with has() method
set2.has(4);    // true
set2.has(7);    // false

// Remove an individual value of a Set with delete() method
set2.delete(4);
set2.has(4);    // false

// Remove all values of a Set with clear() method
set2.clear();
set2.size;  // 0

// Iterating over Sets
// forEach, first and second parameter is the same, since Sets do now have keys.
set.forEach(function(value, key, sameSet){
    console.log(value, key);
    console.log(set === sameSet);
});

// forEach, with 'this' as a second argument
let set3 = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2, 4, 2, 3, 5, 2, 9, 3, 2]);

let processor = {
    outputDuplicated(value) {
        console.log(value * 2);
    },
    process(dataSet){
        dataSet.forEach(function(value) {
            this.outputDuplicated(value);
        }, this);
    }
};

processor.process(set3);    // 2, 4, 6, 8, 10

// Converting a Set into an Array
let myConvertedArray = [...set3];

// Spread operator. Useful approach to create an array without duplicated items
console.log(myConvertedArray);

// Map: collection of keys that corresponds to specific values