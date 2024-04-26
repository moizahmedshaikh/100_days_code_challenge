//Question 130: Explain how to export a function from one JavaScript file and import it into another file.

import { add } from "./day44mathFunction";

console.log(add(5,5));


//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { person } from "./day44mathFunction";
let name = new person("Moiz Ahmed")
name.greet()

//Question 132: Discuss the difference between default and named exports in JavaScript modules.

import { until1, until2 } from "./day44until";

import calculator from "./day44mathFunction";
