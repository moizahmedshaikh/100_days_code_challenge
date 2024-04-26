"use strict";
//Question 118: Write a loop that logs numbers from 1 to 10 to the console.
Object.defineProperty(exports, "__esModule", { value: true });
function loop() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
loop();
//Question 119: Create a while loop that logs "Hello, World!" 5 times.
let num = 0;
while (num < 5) {
    console.log("Hellow World");
    num++;
}
//Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
let movies = [
    "Marvels",
    "Iron Man",
    "Spider Man",
    "King Kong",
    "Jurassic Park",
    "Godzilla VS King Kong",
];
for (let i of movies) {
    console.log(i);
}
