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

// Weak Set: Only stores weak object references and cannot store primitive values.
// Create a Weak Set
let xKey1 = {}, xKey2 = {};
let weakSet = new WeakSet([xKey1, xKey2]);

console.log(weakSet.has(xKey1));    // true
console.log(weakSet.has(xKey2));    // true

// removes the last strong reference to key (also removes from weak set)
xKey1 = null;
console.log(weakSet.has(xKey1));    // false

// 0. Biggest difference between Sets and WeakSets are the weak reference is held in the object value.
// 1. add(), has(), delete() throw an error when passive a nonobject.
// 2. Aren't iterable
// 3. Don't expose any iterators (such as keys() and values())
// 4. No forEach() method
// 5. No size property

// This all limited functionality of weak sets is neccessary to properly handle memory. Useful when
// only we are tracking object references.

/* Map: orderded list of key-values pairs where key-values pair can be any type */

// Creating a Map with new Map() method.
let mapX = new Map();

// Adding pairs of (key,value) with .set() method
mapX.set("movieTitle", "Alien");
mapX.set("year", 1979);

// Retrieving values by passing the key with .get() method
console.log(mapX.get("movieTitle"));    // Alien
console.log(mapX.get("year"));          // 1979

// Possible objects or numbers as keys
let mapY = new Map();
let objAsKey = {};
let objAsKey2 = {};

mapY.set(2, "2-as-a-key");
mapY.set(objAsKey, "obj-as-a-key");
mapY.set(objAsKey2, "obj-as-a-key2");

console.log(mapY.get(2));               // 2-as-a-key
console.log(mapY.get(objAsKey));        // obj-as-a-key
console.log(mapY.get(objAsKey2));        // obj-as-a-key2
// keys are not coerced into another form, each object is consider unique, similar to Set.

// Maps Methods
// .delete(key): removes key and its associated value from the array
// .has(key): determines if the given key exists in the map
// clear(): removes all keys and values from the map

let mapZ = new Map();
mapZ.set("name", "Hector");
mapZ.set("age", 25);

console.log(mapZ.size === 2);   // true

mapZ.has("name");       // true
mapZ.get("name");       // Hector

mapZ.has("age");        // true
mapZ.get("age");        // 25

mapZ.delete("name");    
mapZ.has("name");				// false
mapZ.get("name");				// undefined
mapZ.size === 1;				// true 

mapZ.clear();
mapZ.has("age")					// false
mapZ.get("age")					// undefined
mapZ.size === 0;				// 0

// Map initialization, data is set by passing arrays inside the 'new' constructor method

let mapA = new Map([["Book", "Clean Code 2nd Edition"], ["Movie", "Alien"]]);
console.log(mapA.get("Book"));
console.log(mapA.get("Movie"));

mapA.forEach((value, key, originalMap) => {
	console.log(`${key} + ${value}`);
	console.log(originalMap === mapA);
});

