/*	1. ES6 Default Parameters */
//	Functions with default parameters: supply initializations when the parameter is not formally passed.

//	1.1	Default Parameters primitives
//	Only first parameter should always be passed. If all three parameters are passed, none of the default are used.
function makeRequest(url, timeout = 2000, cb = function() {}) {
	// Rest of my function
}

// Less code, and cleaner version that using the [(typeof param1 !== "undefined") ? param1 : value] line per default variable.

// 1.2 Default Parameters Expresions
function returnConstant() {
	return 5;
}

function add(first, second = returnConstant()) {
	return first + second;
}

console.log(add(2));		// 7
console.log(add(2, 3));	// 5

function returnDouble(num) {
	return num * 2;
}

function triple(first, second = returnDouble(first)) {
	return first + second
}

console.log(triple(4));	// 4

/*	2. Rest Parameters */ 
//	The last named parameter with a (...) operator becouses an Array containing the rest of the parameters passed to the function.
function Team(name, ...teammatesRestOp) {
	this.name = name;
	this.teammates = teammatesRestOp;
}

Team.prototype.getTeamInfo = function() {
	return `${this.name} consists of ${this.teammates}`;
}

let monterreyFC = new Team("Monterrey FC", "J. Basanta", " R. Funes", " A. Hurtado");

console.log(monterreyFC.getTeamInfo());

// Rest parameter has two restrictions. 1. Only one rest parameter (...) per function. 2. The rest parameter should be the last to appear.

/* 	3. Spread Operators */
//	Specifies an array to be splitted in as separate arguments to a function.
let values = [24, 15, 66, 78, 92, 122];
console.log(Math.max(...values));

/*	4. Name property */
//	All functions in ES6 have a 'name' property, to print the name of a function. Useful to debug stack traces and anonymous functions.

function randomFunction() {
	return 'x';
}

let doSomethingOld = function () {
	return 'y';
}

let doSomethingNew = function newFunction() {
	return 'z';
}

console.log(randomFunction.name);			// randomFunction: function declaration, directly the name of the function that was declarated
console.log(doSomethingOld.name);			// doSomethingOld: function expression of anonymous function, the name to the matched variable
console.log(doSomethingNew.name);			// newFunction: 	 function expression, the name of the named function

/*	5. Dual Purpose of Functions */

// Capitalization of a function is only a indication that needs to be called with a 'new' keyword.
function Person(name) {
	this.name = name;
}

// When used with 'new' keyword, 'this' value is the new object which is returned.
let person = new Person("Cassius");
let notAPerson = Person("Cassius");

console.log(person);			// Person { name: Cassius }
console.log(notAPerson);	// undefined

function Animal(kingdom, species) {
	if(typeof new.target !== "undefined") {
		this.kingdom = kingdom;
		this.species = species;
	} else {
		throw new Error("You msut use 'new' with Animal Class");
	}
}

let Dog = new Animal("mammal", "Canine");
let Cat = Animal.call("mammal", "Feline");

// The new.target identifies functions that should be called with 'new' keyword

// Functions have a [Call] and [Constructor] method. [Call] method executes the code as its in the body function. When called with [Constructor]
// the method returns an new object (called an instance), and with 'this' set to the instnace. Arrow functions do not have a [Constructor] method.

/* 6. Block-Level Functions */
// Functions declarations inside a block (for example and if) are best to be avoided. The best practice is to use a function expression.

if(true) {
	// Syntax error in ES5, not in ES6
	function myBlockedFunc() {
		return 'x';
	}
}

console.log(myBlockedFunc());	// x

//	Function expressions are not hoisted to the top of the block. Line 106 throws an error becouse the function it is not yet declared.
if(true) {
	// console.log(typeof myBlockedFunc2);	// error, is not defined

	let myBlockedFunc2 = function() {
		return 'y';
	}

	console.log(myBlockedFunc2());		// y

}

console.log(typeof myBlockedFunc2);	// undefined

//	Function declarations are hoisted to the top of the containing function or the global enviroment.
if(true) {
	console.log(typeof myBlockedFunc3);	// "function"

	function myBlockedFunc3() {
		return 'z';
	}

	console.log(myBlockedFunc3());		// z

}

console.log(typeof myBlockedFunc3);	// // "function"

/* 7. Arrow Functions */
// 	1. Not this, super and arguments bindings: The value of this keywords are defined by the closest containing non-arrow function.
// 	2. Cannot be called with new: Arrow functions do not have [Construct] method.
//  3. No prototype: Since 'new' keyword cannot be used, there's no need of prototype.
// 	4. Can't change 'this': It remaisn the same throughout the entire life cycle.
// 	5. No arguments object: No arguments binding, rely on named and rest parameters.

// Arrow Function, with a single parameter
let reflect = value => value;

// Function Expression Equivalent
let refectFE = function(value) {
	return value;
};

console.log(reflect('returning from arrow function'));
console.log(refectFE('returning from function expression'));

// Arrow Function, with multiple parameters (enclose them in a parenthesis)
let sum = (a, b) => a + b;

// Function Expression Equivalent
let sumFE = function(a, b) {
	return a + b;
};

console.log(sum(2, 5));
console.log(sumFE(2, 5));

// Arrow Function, with no parameters must has a empty set of parameters
let getName = () => "Héctor";

// Function Expression Equivalent
let getNameFE = function() {
	return "Héctor";
};

console.log(getName());
console.log(getNameFE());

// Arrow Function, with a function body needs wrap it between curly braces
let greaterThan = (a, b) => {
	return a > b;
};

// Function Expression Equivalent
let greaterThanFE = function(a, b) {
	return a > b;
};

console.log(greaterThan(8, 5));
console.log(greaterThanFE(8, 5));

// Arrow Function, returning an object literal. Wrapping the object literal in parenthesis signal that the curly braces are an object literal.
let getTempItem = id =>({id: id, name: "Temp"});

// Function Expression Equivalent
let getTempItemFE = function(id) {
	return {
		id: id,
		name: "Temp"
	};
};

console.log(getTempItem(2567).id, getTempItem(2567).name);
console.log(getTempItemFE(2567).id, getTempItemFE(2567).name);

/* IIFE (Immediatly Invoked Function Expressions) */

// AF: By wrapping the arrow function in parenthesis, an IIFE + Arrow Function is achieved.
let personIIFE = ((name) => {
	return {
		getName: function() {
			return name;
		}
	};
})("Hector IIFE");

console.log(personIIFE.getName());

/* Tail Call Optimization */
// Tail call is when a function is called as the last statement from another function

function a() {
	return b();	// tail call
}
// ES5 engines: create a new stack frame and pused onto call stack to represent the function call.

function aOptimized() {
	"use strict";

	return bOptimized();
}
// ES6 engines: Current stack frame is cleared and reused if ->
// 1. Tail Call not require access to variables in the current stack
// 2. Function calling the tail call do has further work to do after tail call returns
// 3. The result of tail call is returned as the function value

// Summary Chapter 3
// Default parameters: allows to specify at ease what value to use when a particular argument is not passed. 
// Rest parameters: allows to specify an array into which all remaining parameters should be placd. Uses a real array, and can specify which parameters.
// Spread operator: allows to deconstruct an array into separate parameters when calling a function.
// Name property: identify functions and evaluation properties.
// Function is called with [[Call]] when normally invoked. Function is called with [[Construct]] when called with 'new' keyword.
// Arrow Functions: desgined to replace the anonymous functions function expressions. Lexical 'this' binding, no arguments object. Cannot be used as constructors.
// Tail call optimization: allows function calls to be optimized to maintain a smaller caller stack, use less memory, prevent stack overflow errors. Applied automatically.