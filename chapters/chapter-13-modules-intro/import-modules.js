import { name, infoPerson, Drink } from "./export-modules.js";
// name, infoPerson and Drink are imported and defined as const. They cannot be redefined.

import * as mexicoVariables from "./export-modules-2.js";
// * is a wildcard to import the entire module

import { add } from "./export-modules-3.js";
// while the original function is called 'sum' it has an alias to be 'add'

import multiply from "./export-modules-4.js";
// import no needs curly braces since we are declaring the name of the default export

// Summary
// ES6 modules are a way to package and encapsulates functions. Modules don't modify the global scope, with
// their top level variables, functions, classes, and 'this' is undefined.
// Everything must be explicitly exported and imported.