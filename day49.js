"use strict";
//Question 145: Create a function that accepts a callback and invokes it with some arguments.
Object.defineProperty(exports, "__esModule", { value: true });
function executeCallBack(callback, arg1, arg2) {
    callback(arg1, arg2);
}
const add = (a, b) => {
    console.log(a + b);
};
executeCallBack(add, 5, 5);
//Question 146: Show an example of a callback function used to filter an array of numbers.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNUmbers = numbers.filter((number) => number > 5);
console.log(filterNUmbers);
//Question 147: Explain how to handle errors in a callback pattern.
function fetchData(callback) {
    const error = new Error("Fail to fetch data");
    const data = "some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData((error, data) => {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
