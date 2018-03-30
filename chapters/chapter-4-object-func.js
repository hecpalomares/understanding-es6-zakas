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

// ES6: Syntax is more conise by eliminating the colon and 'function' keyword.
// Concise methods can also use 'super.
let personES6 = {
    name: "Hector Six 6",
    getName() { // Anonymous function. 
        console.log(this.name);
    }
};

personES6.getName();