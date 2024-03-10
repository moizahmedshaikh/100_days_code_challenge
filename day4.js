"use strict";
// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Moiz ahmed, 3-11-2024 
// this programe print a personal message
let myName = "Moiz Ahmed";
console.log(` Hello My name is ${myName} and i am learning programming `);
// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendNames = ["aman", "ahmed", "muzammil", "anees"];
for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
let friendName = ["aman", "ahmed", "muzammil", "anees"];
for (let name of friendName) {
    console.log(`Hello ${name}, would you like programming`);
}
