"use strict";
// //Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
Object.defineProperty(exports, "__esModule", { value: true });
function roundingNumber(num) {
    return Math.round(num);
}
console.log(roundingNumber(10.3));
console.log(roundingNumber(10.8));
// //Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function ConvertStringsToNumbers(str) {
    return parseFloat(str);
}
console.log(ConvertStringsToNumbers("121212"));
console.log(ConvertStringsToNumbers("12.21"));
//Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function valueIsNan(val) {
    return isNaN(val);
}
console.log(valueIsNan("hellow"));
console.log(valueIsNan(1212));
