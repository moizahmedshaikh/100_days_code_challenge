"use strict";
//Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
Object.defineProperty(exports, "__esModule", { value: true });
function Assigning() {
    let age = 10;
    console.log(`Initial Value ${age}`);
    age = 20;
    console.log(`Updated Value ${age}`);
}
Assigning();
//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
let a = 10;
let b = 20;
console.log("Before use swaping: a =", a, "b =", b);
let temp = a;
a = b;
b = temp;
console.log("After use swaping: a =", a, "b =", b);
//Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function CompoundOperators() {
    let x = 4;
    console.log("Initial Value:", x);
    x += 5;
    console.log("After Addition: ", x);
    x -= 1;
    console.log("After Subtration:", x);
    x *= 4;
    console.log("After Multiplication:", x);
    x /= 2;
    console.log("After Division:", x);
}
CompoundOperators();
