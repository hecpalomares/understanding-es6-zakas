/* Destructuring for easy data access */
// Process of breaking down a data structure into smaller parts

// ES5
let options = {
    repeat: true,
    save: false
};

// Extract values from options object and set them on repeat and save variables
let repeat = options.repeat;
let save = options.save;

console.log(repeat, save);

// ES6: [Object Destructuring]
// Uses an object literal on the left side of the assignament operation
let files = {
    type: "js",
    editable: true
};

let {type, editable} = files;   // Same syntax as the object literal property initializer shorthand.
console.log(type, editable);    // js, true

// Destructuring assignament
type = "css";
editable = false;
console.log(type, editable);    // css, false

({type, editable} = files);
console.log(type, editable);    // js, true

// Default Values: Specify a local variable with a property name that doesn't exist on the object.
let team = {
    name: "Team A",
    players: ["John", "Matt", "Ramon"],
    payed: true,
    sport: "Baseball"
};

let {name, players, payed, sport} = team;
console.log(name, players, payed, sport = "Soccer");   // Team A [ 'John', 'Matt', 'Ramon' ] true Soccer

// Assign Different Local Variable Names
let drink = {
    name: "Merlot",
    calories: 150,
    origin: "France"
};

let { name: wineName, calories: wineCalories, origin: wineCountry, source: wineSource = "grape" } = drink;
console.log(wineName, wineCalories, wineCountry, wineSource);   // Merlot 150 France grape

// ES6: Array Destructuring
// Similar to an object destructuring, but with an array literal syntax
let colors = ["Red", "Green", "Blue"];

let [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);   // Red Green Blue