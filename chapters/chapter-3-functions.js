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