// Modules: Sepearted JS code that runs in strict-mode. Variables only exists within
// the top-level scope of the module, and everything must be exported in order to be used.
// The ability to import and export only the needs make the JS Modules powerful.

// Basic Exporting
// Exporting Data with 'export' keyword
export var age = "25";
export let name = "Hector";
export const gender = "Male";

// Export Functions
export function infoPerson(age, name, gender) {
  return `Hi my name is ${name}, and I'm ${age} ${gender}`;
}

// Export Class
export class Drink {
  constructor(name, originCountry) {
    this.name = name;
    this.originCountry = originCountry;
  }
}

// Function is private to the module
function increaseAge() {
  age++;
}

// Declaring a function and exporting later
function infoDrink(name, originCountry) {
  return `${name} is from ${originCountry}`; 
}

// export infoDrink;

// Notes:
// Exported functions or class need to have a name to be exported (unless they use 'default' keyword).
// lines 25 to 27 are not exported, and are not accessible outside from this module
