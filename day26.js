"use strict";
//Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
Object.defineProperty(exports, "__esModule", { value: true });
function adds(num1, num2) {
    return num1 + num2;
}
console.log(adds(5, 5));
//Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greeting(name = "unknown") {
    console.log(`hellow ${name}!`);
}
greeting("moiz");
greeting();
//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function Expression(num1, num2) {
    return num1 * num2;
}
;
const declarations = (num1, num2) => {
    return num1 * num2;
};
console.log(Expression(2, 2));
console.log(declarations(2, 2));
