"use strict";
//Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
Object.defineProperty(exports, "__esModule", { value: true });
setTimeout(() => {
    console.log("This Message show after 3 second...");
}, 3000);
//Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(() => {
    console.log("CallBack Executed");
}, 0);
console.log("End");
// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
console.log("before Synchronous Operation");
for (let i = 0; i < 1e9; i++) { }
console.log("After Synchronous Operation");
console.log("Before Asynchronous Operation");
setTimeout(() => {
    console.log("Asynchronous Operation Completed");
}, 0);
console.log("After Asynchronous Operation");
