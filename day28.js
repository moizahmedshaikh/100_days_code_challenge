"use strict";
//Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
Object.defineProperty(exports, "__esModule", { value: true });
function stringLenghth(str) {
    return str.length;
}
console.log(stringLenghth("moiz"));
//Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertCase(str) {
    let uppstr = str.toUpperCase();
    let lowstr = str.toLowerCase();
    console.log("Uppercase:", uppstr, "Lowercase:", lowstr);
}
convertCase("Hello world");
//Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("Hellow! My name is MoizAhmed and I'm learning TypeScript "));
