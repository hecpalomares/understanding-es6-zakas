/*** Chapter 1: Block bindings	***/

/*	1. var Declarations and Hoisting (function-scoped) */

function a(condition) {

	if(condition) {
		var color = "blue";
		return color;
	} else {
		// 'color' exists here as undefined
		return null;
	}
	// 'color' exists here as undefined
}

// Equivalent to:

function aEqui(condition) {
	
	var color;
	
	if(condition) {
		color = "blue";
		return color;
	} else {
		return null;
	}

}

//	The declaration of 'color' variable is hoisted to the top. The initialization remains on the line created
//	If hoisted variable is accessed before initialization the value would be undefined

/*	2. Block-Level Declarations */
//	Declare bindings that are innaccessible outside a given scope. Created at: 1. Inside a function. 2. Inside a block (inside {} characters)

//	2.1: let Declarations: not hoisted to the top of the enclosing block
function b(condition) {

	if(condition) {
		let color = "blue";
		return color;
	} else {
		// 'color' doesn't exist here
		return null;
	}
	// 'color' doesn't exist here
}

//	2.2 const Declarations: the values cannot changed once set. Every const binding must be initialized on declearation

const NAME = "Alice";		// Valid
const PI;								// Invalid, SyntaxError: Missing initializer in const declaration)

const NAME = "Bob";			//	Invalid, SyntaxError: Identifier 'NAME' has already been declared

// Object Declarations with const: the const declaration on objects prevents modification of the binding, not of the value.
const person = {
	name: "Chad"
};

person.name = "Dave"; 	// Valid

person = {
	name: "Ernest"				// Invalid, TypeError: Assignment to constant variable.
}

// 2.3 Temporal Dead Zone: A variable declared with let or const, cannot be accessed until after the declration.

if(true) {
	console.log(typeof myValue);
	let myValue = "red";		// Invalid, ReferenceError: myValue is not defined
}

//	Block Bindings in loops
for(var i = 0; i <= 3; i++) {
	console.log(i);	// 3
}

console.log(i);		// 3, still accesible outside the loop

for(let j = 0; j <= 3; j++) {
	console.log(j);
}

console.log(j);		// j is not accessible here, error

/*	Summary: */
// 'let' and 'const' block bindings introduce lexical scoping to JavaScript. These declarations are not hoisted and only exist in the block declared.

// 	Block bindings offer advantages: Share similarities with other established languagues (easier to transfer the knowledgement between them).
//	Less unlikely to to cause errors, since variables are declared when they're exactly needed (or an error will be thrown).

// 	Accessing a variable declared with block bindings before its declaration, would result in an error since it is the TDZ (Temporal Dead Zone).

//	Both 'let' and 'const' create a new binding with each iteration through the loop. 
//	Using a 'const' declaration inside a loop would return an error at the second iteration, as it try to reassign a value.

//	The current best practice for block binding is use 'const' by default, and use 'let' declaration when we are sure the value will change. 
//	Ensuring some basic level of immutability.