"use strict";
//Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 9, 3, 3, 8];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);
//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixItems = ["hamza", 5, false, "ali raza", 10];
let StringItems = mixItems.filter(item => typeof item === "string");
console.log(StringItems);
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [90, 80, 75, 89, 78];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
