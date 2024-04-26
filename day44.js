"use strict";
//Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
const day44mathFunction_1 = require("./day44mathFunction");
console.log((0, day44mathFunction_1.add)(5, 5));
//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
const day44mathFunction_2 = require("./day44mathFunction");
let name = new day44mathFunction_2.person("Moiz Ahmed");
name.greet();
