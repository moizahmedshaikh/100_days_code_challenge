"use strict";
//Question 127: Convert a traditional function expression to an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
const traditionalFunction = (a, b) => {
    return a + b;
};
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 5));
console.log(arrowFunction(5, 5));
//Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
const sumParameter = (...number) => {
    return number.reduce((pre, curr) => pre + curr, 1);
};
console.log(sumParameter(1, 3, 4));
//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
let traditionFunction = {
    name: "Moiz Ahmed",
    traditionalFunction: function () {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    },
};
traditionFunction.traditionalFunction();
traditionFunction.arrowFunction();
