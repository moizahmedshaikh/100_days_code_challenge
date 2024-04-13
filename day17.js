"use strict";
//Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
Object.defineProperty(exports, "__esModule", { value: true });
function loghobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    });
}
loghobbies("cricket", "patti Game", "PC Games");
//Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
let message = (`My ideal day would involve:
1. Waking up and do break fast.
2. Spending a few hours coding .
3. then afternoon go to college
4. Ending the day with eat dinner`);
console.log(message);
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculateArea(height, width) {
    return height * width;
}
let calculate = (height, width) => height * width;
console.log(calculate(5, 5));
