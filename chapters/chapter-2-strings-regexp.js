// ES6 String Changes

// includes(). Returns true if the given text is found anywhere within the string.
// startsWith(). Returns true if the given text is found at the beginning of the string.
// endsWith(). Returns true if the giveen text is found at the end of the string.

// Each method accepts two arguments. method(textToSearch, optionalIndex to start)

let msg = "Hello world!";

console.log(msg.startsWith("Hello"));			// True
console.log(msg.endsWith("ld!"));					// True
console.log(msg.includes("llo"));					// True

console.log(msg.startsWith("ello"));			// False
console.log(msg.endsWith("wo"));					// False
console.log(msg.includes("Javascript"));	// False

console.log(msg.startsWith("llo", 2));		// True, starts at index 2
console.log(msg.endsWith("ld!", 2));			// False, start at index 10 = 12 - 2 (wordlength - argument).
console.log(msg.includes("w", 8));				// False, start at indez 8

// Template Strings: Provide a syntax for creating domain-specific languagues for working with content in a safer way than the current ES5 solutions.

// Basic Syntax
let messageTS = `\'My string\'`;	// Back-lash (/) to escape 
	
console.log(messageTS);						// 'My string'
console.log(typeof messageTS);		// string
console.log(messageTS.length);		// 11

// Multiline String
let multilineString = `Random
Multiline`;

console.log(multilineString);			// Random
																	// Multiline

// Making substitutions. The biggest difference, allow embed any valid Javascript expression inside a template string.
let name = "Hector";
let age = 25;
let myMoney = 150;
const tax = 0.7;

let myInfo =  `Hello my name is ${name}, and I'm ${age} old. I currently have $${myMoney.toFixed(2) * tax} after taxes`;

console.log(myInfo);

// Variables are accessible on the scope which is defined. Embed calculations, function calls.

// Tagged Templates
let message = tag`Hello world`;

function tag(literals, ...substitutions) {
	let result = "";

	// Run loop only for the substitutions count
	for(let i = 0; i < substitutions.length; i++) {
		result += literals[i];
		result += substitutions[i];
	}

	result += literals[literals.length - 1];

	return result;
}

let count = 10;
let price = 0.25;
let itemsMsg = tag`${count} items cost $${(count * price).toFixed(2)}.`;

console.log(itemsMsg);