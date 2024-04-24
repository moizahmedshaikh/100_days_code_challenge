"use strict";
//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of
//word?
Object.defineProperty(exports, "__esModule", { value: true });
let cars = ["civic", "corola", "mehran"];
let lengths = cars.map((car) => car.length);
console.log(lengths);
//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function returnArrOfNumbers(numbers) {
    return numbers.filter((num) => num > 10);
}
const numbers = returnArrOfNumbers([
    2, 32, 3, 4, 5, 6, 43, 34, 544, 12,
]);
console.log(numbers);
//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current);
}
let totalSum = [2, 3, 4, 5, 10];
console.log(sum(totalSum));
