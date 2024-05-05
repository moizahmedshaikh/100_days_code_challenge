//Question 139: List three reserved words in JavaScript and create a valid use case for each.

let a = 10;

if (5 > 4) {
  console.log("yes 5 is greater than 4");
}

function sum(a: number, b: number) {
  return a + b;
}

//Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.

//let else = 5  // this line would cuase a syntax error;

console.log(
  "Using a reserved word as a variable name causes a syntax error in JavaScript."
);

//Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

let fetchSomething = () => {};
async function fetchData() {
  const data = await fetchSomething();
  console.log(data);
}

console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
