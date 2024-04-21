//Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

const car = {
  make: "Ford",
  model: "Mustang",
  year: 2019,
};
console.log(car.model);

//Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

const updateCar = {
  make: "Ford",
  model: "mustang",
  year: 2019,
  color: "red",
};

updateCar.color = "Red";
updateCar.year = 2021;

console.log(updateCar);

//Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObjectProperties(obj: object) {
  for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}

logObjectProperties({
  make: "Ford",
  model: "mustang",
  year: 2021,
  color: "red",
});
