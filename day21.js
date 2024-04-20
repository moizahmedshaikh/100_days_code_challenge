"use strict";
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
Object.defineProperty(exports, "__esModule", { value: true });
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["truck"] = 1] = "truck";
    vehicles[vehicles["bike"] = 2] = "bike";
})(vehicles || (vehicles = {}));
console.log(vehicles.bike);
let student = {
    name: "moiz",
    age: 20,
    courses: ["Physics", "English", "Islamiat"],
};
console.log(student);
let circle = {
    kind: "circle",
    radius: 5,
};
let rectangular = {
    kind: "rectangular",
    width: 10,
    height: 20,
};
console.log(circle);
console.log(rectangular);
