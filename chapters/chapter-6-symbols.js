/* Symbols: Unique JavaScript primitive that create a private object member. By using identifiers on the
            object properties. Not two Symbols created are a like even if they share the same description. */

/* Creating Symbols */
let firstName = Symbol("first name desc");       // Symbol created with description
let person = {};          

person[firstName] = "Luck";     // Assign a new property on the person object
console.log(person[firstName]); // Luck
console.log(firstName);         // Symbol(first name desc)

/* Using Symbols */
let myFirstName = Symbol("my name");

// use a computed object literal property
let me = {
    [myFirstName]: "Hector"
};
// make property read-only
Object.defineProperty(me, myFirstName, { writable: false });

let myLastName = Symbol("my lastName");
Object.defineProperties(me, {
    [myLastName]: {
        value: "Palomares",
        writable: false
    }
});

console.log(me[myFirstName]);   // Hector
console.log(me[myLastName]);    // Palomares

/* Sharing Symbols */
// Accepts .for() method accepts a single parameter to match a identifier a global symbol registry (shared envrioment).
let uid = Symbol.for("uid");
let objectX = {};

objectX[uid] = "12345";
console.log(objectX[uid]);  // 12345

let uid2 = Symbol.for("uid");
console.log(uid === uid2);  // true
console.log(objectX[uid2]); // 12345

// Summary
// New primitive value to create nonenumerate properties that can be accessed without referencing the symbol.
// Symbols properties are harder to overwrite so suitable for functionality that requires protection.
// Provide string descriptions to easily identify them. Global Symbol Registery is a shared enviroments to share symbols with same description.
// Object.keys() or Object.getOwnPropertyNames() do not return properties listed as a Symbol.