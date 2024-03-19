"use strict";
// // Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing
let friends = ["aman", "muzammil", "anees", "bilal"];
console.log(friends[4]);
friends[2] = "anees";
// // Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let car = "civic";
console.log("It car === civic ? I predict true");
console.log(car === "civic");
console.log("It car === corolla ? I predict false");
console.log(car === "corolla");
console.log("it car !== rikshaw ? I predict true");
console.log(car !== "rikshaw");
console.log("it car === plane ? I predict false");
console.log(car === "plane");
console.log("it car !== bus ? I predict true");
console.log(car !== "bus");
console.log("it car !== civic ? I predict false");
console.log(car !== "civic");
console.log("it car !== train ? I predict true");
console.log(car !== "train");
console.log("it car === CIVIC ? I predict false");
console.log(car === "CIVIC");
console.log("it car !== Civic ? I predict true");
console.log(car !== "Civic");
console.log("it car === Civic ? I predict FALSE");
console.log(car === "Civic");
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// Test with string 
let banana = "banana";
console.log("Testing equality with strings:");
console.log("banana" == "banana"); // True
console.log("banana" == "Banana"); // False
// //Test with lowercase
console.log("Testing with lower Cases");
console.log("BANANA".toLocaleLowerCase() == "banana");
// // //Numeric test
console.log("Numeric Test");
console.log(7 < 10); //true
console.log(5 > 6); //false
// // //Test using 'and' and 'or' Operators
console.log("test with 'and' and 'or'");
console.log(2 + 2 == 4 && 2 + 2 == 6); // false
console.log(2 + 2 == 4 || 2 + 2 == 6); // true
// // Test whether an item is in a array
let fruits = ["apple", "banana", "mango", "orange",];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("mango")); //true
console.log("Is 'mango' is not in fruits");
console.log(!fruits.includes("mango")); //true
