// Object Literal Syntax Extensions

/* [Property Initializer Shorthand] */
// ES5: Duplicated values when property values are initialized
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

// ES6: Eliminate the duplication around property names and local variables. Sets the same name.
function createPersonES6(name, age) {
    return {
        name, 
        age
    };
}

let me = createPerson("Hec", 25);
let me2 = createPersonES6("Hec2", 35);

console.log(me, me2);   // { name: 'Hec', age: 25 } { name: 'Hec2', age: 35 }

/* [Concise Methods] */
// ES5: Specify a name and then the full function to add a method to an object
let person = {
    name: "Hector",
    getName: function() {
        console.log(this.name);
    }
};

person.getName();

// ES6: Syntax is more conise by eliminating the colon and 'function' keyword
// Concise methods can also use 'super
let personES6 = {
    name: "Hector Six 6",
    getName() { // Anonymous function
        console.log(this.name);
    }
}

personES6.getName();

/* [Computed Property Names] */
// ES5: Compute property names on object instances when those properties were set with square brackets
let personX = {};
let lastName = "Last Name";

personX["first name"] = "Tim";
personX[lastName] = "Miles Jack";

console.log(personX);
console.log(personX["first name"]); // Tim
console.log(personX[lastName]);     // Miles Jack

// ES6: Bracket notation indicate the name is computed (line 63). They're evalauted as a string, can contain expressions.
let lastNameY = "Last Name";
let personY = {
    "first name": "Hector",
    [lastNameY]: "G"
};

console.log(personY);               // { 'first name': 'Hector', 'Last Name': 'G' }
console.log(personY["first name"]); // Hector
console.log(personY[lastNameY]);    // G

let suffix = " name";

let personZ = {
  ["first" + suffix]: "John",
  ["last" + suffix]: "Wall"
};

console.log(personZ);              // { 'first name': 'John', 'last name': 'Wall' }

/* New Methods */
// Object.assign()
// Mixin: one objets receives properties and methods from another object

let targetObj = {};
let sourceObjA = {
    type: "js",
    name: "file.js",
    size: 124
};

Object.assign(targetObj, sourceObjA); 
console.log(targetObj) //  { type: 'js', name: 'file.js', size: 124 }

let sourceObjB = {
  type: "css",
  name: "styles.css"
};

Object.assign(targetObj, sourceObjB); 
console.log(targetObj); //  { type: 'css', name: 'styles.css', size: 124 }

// The second source object overwrote the vale from the first source object.

// Own Property Enumeration Order
// 1. All numeric keys in ascending order
// 2. All strings keys in the order added to the object
// 3. All symbol keys in the order added to the object

let enumObj = {
    a: 1,
    0: 2,
    c: 1,
    b: 1,
    1: 3
};

enumObj.d = 3;

console.log(Object.getOwnPropertyNames(enumObj).join(", "));  // 0, 1, a, c, b, d