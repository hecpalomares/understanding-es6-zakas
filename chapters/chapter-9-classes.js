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

// Generator Methods
// create a class MyGenClass with a generator method inside
class MyGenClass {
  *createIterator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

let instance = new MyGenClass();
let iterator = instance.createIterator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }

class Collection {
  constructor() {
    this.items = [];
  }

  *[Symbol.iterator]() {
    yield *this.items.entries();
  }
}

let collection = new Collection();
collection.items.push("Andrew");
collection.items.push("Peyton");
collection.items.push("Jacoby");

for(let value of collection) {
  console.log(value);
}

// Static : adding methods into the constructor
function Player(name) {
  this.name = name;
}

// instance method
Player.prototype.sayName = function() {
  console.log(this.name);
};

// static method
Player.create = function(name) {
  return new Player(name);
};

let quarterback = Player.create("Peyton Manning");
quarterback.sayName();

// Static Methods on ES6 Classes
class PlayerClass {
  // equivalent of the PersonType constructor (line 207)
  constructor(name) {
    this.name = name;
  }

  // equivalent of the instance method PersonType2.prototype.sayName (line 212)
  sayName() {
    console.log(this.name);
  }

  // equivalent of the static method PersonType2.create (line 217)
  static create(name) {
    return new PlayerClass(name);
  }

}

let quarterbackES6Class = PlayerClass.create("Andrew Luck");
quarterbackES6Class.sayName();

// Static member functions are not accessible from the instances. Only accessible directly from the class.

// Inheritance Derived Classes
// ES5 Inheritance
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function () {
  return this.length * this.width;
}

// Call the Rectangle.call()
function Square(length) {
  Rectangle.call(this, length, length);
}

// Overwrite Square prototype with new object created from Rectangle.protoype
Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true
  }
});

let square = new Square(3);
console.log(square.getArea());            // 9
console.log(square instanceof Square);    // true
console.log(square instanceof Rectangle); // true

// Inheritance with ES6
class RectangleES6 {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    console.log("Calling getArea method from Rectangle Class");
    return this.length * this.width;
  }

  getPerimeter() {
    console.log("Calling getPerimeter method from Rectangle Class");
    return (2 * this.length) + (2 * this.width);
  }

  // Static methods are also inherited
  static create(length, width) {
    return new Rectangle(length, width);
  }
}

// SquareES6 class inherits from RectangleES6 with 'extends' keyword
// Classes that inherit from other classes are called derived classes. They require a 'super'.
class SquareES6 extends RectangleES6 {
  constructor(length) {
    //  super() can only be used in a derived class constructor.
    super(length, length); // equivalent of Rectangle.call(this, length, length)
  }

  // Shadowing Class Methods
  // Calling from the base class version with super()
  getArea() {
    console.log("Calling getArea from Square (baseclass)");
    return super.getArea();
  }

  // Shadowing the base class
  getPerimeter() {
    console.log("Calling getPerimeter from Square (shadowed)");
    return (4 * this.length);
  }
}

let squareES6 = new SquareES6(4);
console.log(squareES6.getArea());   
console.log(squareES6.getPerimeter());            // 16, line 301
console.log(squareES6 instanceof SquareES6);      // true
console.log(squareES6 instanceof RectangleES6);   // true

let rectangleES6 = SquareES6.create(3, 4);
console.log(rectangleES6.getArea());
console.log(rectangleES6 instanceof RectangleES6);
console.log(rectangleES6 instanceof SquareES6);

// Derived Class From Expressions: Can use 'extends' with any expression  as long as the expressions solves to [[Construct]]
function RectangleES5(length, width) {
  this.length = length;
  this.width = width;
}

RectangleES5.prototype.getArea = function () {
  return this.length * this.width;
};

// Because RectangleES5 has a [[Constructor]] and a prototype. SquareDerived can inherit from it.
class SquareDerived extends RectangleES5 {
  constructor(length) {
    super(length, length);
  }
}

let mySquareDerived = new SquareDerived(8); 
console.log(mySquareDerived.getArea());                 // 64
console.log(mySquareDerived instanceof RectangleES5);   // true


// Inherit Built-Ins
// MyArray inherit directly from Array, and works like an Array. New to ES6.
class MyArray extends Array {};

let colors = new MyArray();
colors[0] = "Red";
console.log(colors.length); // 1

colors.length = 0;
console.log(colors[0]);     // undefined

// Using a new.target in Class Constructors
class Drink {
  constructor(name, price) {
    console.log(new.target === Drink);
    this.name = name;
    this.price = price;
  }

  calculatePriceAfterTax() {
    return (this.price * 1.15).toFixed(2);
  }
}

// new.target is Product
let soda = new Drink("Soda", 0.99); // true, new.target was called from Drink
console.log(soda.calculatePriceAfterTax());

class AlcoholicDrink extends Drink {
  constructor(name, price, ageRestriction) {
    super(name, price);
    this.ageRestriction = ageRestriction;
  }
}

let beer = new AlcoholicDrink("Bohemia", 1.29, true); // false, new.target was called from AlcoholicDrink