"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = exports.add = void 0;
//Question: 130 
const add = (a, b) => a + b;
exports.add = add;
//Question: 131 
class person {
    name;
    constructor(names) {
        this.name = names;
    }
    greet() {
        console.log(`Hello, My name is ${this.name} `);
    }
}
exports.person = person;
//Question 132
class calculator {
}
exports.default = calculator;
