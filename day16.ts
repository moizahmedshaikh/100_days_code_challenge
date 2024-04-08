//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {
  make: "hp",
  model: "probook 640 G5",
  year: "2020",
  describe: function () {
    console.log(`This laptop is ${this.year} ${this.make} ${this.model}`);
  },
};
laptop.describe();

//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables

let laptops = [
  {
    make: "Dell",
    model: "XPS 15",
    year: "2022",
  },
  {
    make: "hp",
    model: "probook 640 G5",
    year: "2020",
  },
  {
    make: "lenovo",
    model: "Thinkpad",
    year: "2020",
  },
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);

// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let priceSet1 = [50000, 25000, 100000];
let priceSet2 = [20000, 30000, 70000];

let combinePrise = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinePrise);
