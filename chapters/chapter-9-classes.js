/* Class-Like Structures in ES5: JS has no classes. Closest equivalent was creating a constructor and then
** assigning methods to the constructor prototype.
*/ 

// "Constructor" function creates a single property called 'name'
function PersonType(name) {
  this.name = name;
}

// "Prototype Method" shared across all instances of PersonType object
PersonType.prototype.sayName = function () {
  console.log(this.name);
};

// 'new' keyword creates an instance of the Constructor function
// Returns a new object instance of PersonType and of Object through prototypal inheritance
let me = new PersonType("Hector");
me.sayName();

console.log(me instanceof PersonType);  // true
console.log(me instanceof Object);      // true

// Class Declrations in ES6

// Basic class
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}


let meClass = new PersonClass("Gerry");
meClass.sayName();

console.log(meClass instanceof PersonClass);  // true
console.log(meClass instanceof Object);       // true

console.log(typeof PersonClass);                    // function
console.log(typeof PersonClass.prototype.sayName);  // function

/* ES6 Classes are syntatic sugar that run on top of prototype inheritance. 
** Class prototypes are read-only. Cannot assign new method linked to the PersonClass.prototype
** Class declarations are not hoisted. Unlike function declarations
** Code run inside class declarations runs in strict mode
** Methods are nonenumerable, lacks an internal [[Construct]] method
** Calling a class constructor without 'new' keyword throws an error
** Attempting to overwrite the class name throws an error
*/

// Class as First-Class Citizens
// First-Class Citizen: is a value that can be passed into a function, returned from a function, and assigned to a variable.

// Passing an argument class
function createObject(classDef) {
  return new classDef();
}

// Called with an anonymous class expression as an argumen, creates an instance of that class and returns the instance
let obj = createObject(class {  
  sayHi() {
    console.log("Hi");
  }
});

obj.sayHi();  // "Hi!"

// Anonymous class expressions created and executed immediately
let personX = new class {
    constructor(age) {
      this.age = age;
    }

    sayAge() {
      console.log(this.age);
    }
}(25);  // Calling a function immediately, and passing 25 argument

personX.sayAge(); // 25

// Accessor Properties

// Class Equivalent
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  // Create getter, 
  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

let descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");
console.log("get" in descriptor);     // true
console.log("set" in descriptor);     // true
console.log(descriptor.enumerable);   // false

// Nonclass equivlanet
let CustomHTMLElementES5 = (function () {
  "use strict";

  const CustomHTMLElement = function (element) {
    
    if(typeof new.target === "undefined") {
      throw new Error('Constructor must be called with new');
    }
    this.element = element;
  }

  Object.defineProperty(CustomHTMLElement.prototype, "html", {
    enumerable: false,
    configurable: false,
    get: function() {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
    }
  });

  return CustomHTMLElement; 

}());

// A lot of code can be omitted by using a class instead of a nonclass equivalent. 

// Computed Member Names
let methodName = "sayName";

class PersonClass2 {
  constructor(name) {
    this.name = name;
  }

  // uses a variable to assign a name to a method inside its definition
  [methodName]() {
    console.log(this.name);
  }
};

let me2 = new PersonClass2("Hector");
// sayName() method is accessed directly after
me.sayName();

let propertyName = "skill";

class Character {
  constructor(element) {
    this.element = element;
  }

  get [propertyName]() {
    return this.element;
  }

  set [propertyName](value) {
    this.element = value;
  }
}