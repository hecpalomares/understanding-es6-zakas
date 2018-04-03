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

// Swaping variables without the need of a temporal variables
let x = 10, y = 20;

[x, y] = [y, x];
console.log("x:", x, "y:",y)

// Rest Items
let countries = ["Mexico", "Italy", "Germany", "USA"];

let [firstCountry, secondCountry, ...restOfCountries] = countries;
console.log(firstCountry);          // Mexico
console.log(secondCountry);         // USA
console.log(...restOfCountries);    // Germany, USA

let [...clonedCountries] = countries;
console.log(typeof clonedCountries);    // object [array]
console.log(clonedCountries.length);    // 4

// Mixed Destructuring
let nodeMixed = {
    type: "point",
    name: "Punto A",
    loc: {
        start: {
            x: 1,
            y: 2
        },
        end: {
            x: 2,
            y: 5
        }
    },
    range: [1, 4]
};

let {
    loc: {start},
    range: [...range],
} = nodeMixed;

console.log(start);             // { x: 1, y: 2 }
console.log(range);             // [1, 4]

// Destructuring Parameters: Uses an object or array destructuring pattern in place of named paramter.

// The empty object secures that the third parameter is optional
function setCookie(name, value, { secure, path = "C:/cookies/tmp", expires = 2000 } = {} ) {
    console.log(name, value);           // cookieA, .js
    console.log(secure, path, expires); // true 'C:/cookies/tmp' 6000 (expires doesn't take default value, path does)
}

setCookie("cookieA", ".js", {secure: true, expires: 6000});

// Summary
// 1. Destructuring makes working with objects and arrays easier by dissecting the data:
// 1.1 Navigate deeply between objects or arrays (easier syntax)
// 1.2 Assignaments values throw erros when evaluating to null or undefined (safer)

// 2. Destructured parameters use a destructuring syntax to make options objects more transparent: 
// 2.1. By listing all the actual data used,  and making the options parameters as optional or not
// 2.2. Having default parameters if not passed to the function
// 2.3. Making the options parameter required or not