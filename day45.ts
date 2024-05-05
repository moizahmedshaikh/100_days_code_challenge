//Question 133: Write a JavaScript object and convert it into a JSON string.

const person = {
  name: "Moiz Ahmed",
  age: 20,
  city: "Karachi",
};

let jsonString = JSON.stringify(person);
console.log(jsonString);

//Question 134: Take a JSON string and parse it into a JavaScript object.

const jsonStr = `{ "name": "Moiz Ahmed", "age": 20, "city": "Karachi"}`;

let person2 = JSON.parse(jsonStr);
console.log(person2);

//Question 135: Explain how you can format a JSON string with proper indentation for readability.

const person3 = {
  name: "Moiz Ahmed",
  age: 20,
  city: "Karachi",
};
const json = JSON.stringify(person3, null, 2);
console.log(json);
