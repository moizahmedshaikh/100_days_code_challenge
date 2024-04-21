"use strict";
//Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
Object.defineProperty(exports, "__esModule", { value: true });
function codePosition(str) {
    return str.indexOf("code");
}
console.log(codePosition("Learn to code with typescript"));
//Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function checkTextPresence(str) {
    return str.includes("javaScript");
    false;
}
console.log(checkTextPresence(" I love javaScript")); //true
console.log(checkTextPresence(" I love typeScript")); //false
//Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function extractSubstring(str) {
    return str.substring(0, 5);
}
console.log(extractSubstring("Hellow! My name is Moiz Ahmed")); // Hellow
