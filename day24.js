"use strict";
//Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
Object.defineProperty(exports, "__esModule", { value: true });
function UnderstandingLoop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
UnderstandingLoop();
//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let num1 = 5;
num1 = 6;
console.log(num1);
const firstName = "moiz";
try {
    firstName = "ahmed";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable");
}
//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let blockLet = "Hellow moiz";
    const blockConst = "Hellow moiz";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    blockLet = "Hellow ahmed";
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    blockConst = "Hellow ahmed";
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
