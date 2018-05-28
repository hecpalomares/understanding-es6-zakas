// Apendix A
// Identify Integers
console.log(Number.isInteger(25));    // true
console.log(Number.isInteger(25.1));  // false
console.log(Number.isInteger(25.0));  // true, saved as an integer thats why it returns true

// Safe Integers
const max = Number.MAX_SAFE_INTEGER;
const min = Number.MIN_SAFE_INTEGER;
console.log(max); // 9007199254740991 (2 ^ 53)
console.log(min); // -9007199254740991 (-2 ^ 53)

// Apendix B
// Exponention Operator
let result = 5 ** 2;
console.log(result);  // 25
console.log(result === Math.pow(5, 2)); // true

// Array.prototype.inludes() method
let values = ['a', 'b', 'c'];
console.log(values.includes('a'));  // true
console.log(values.includes('d'));  // false