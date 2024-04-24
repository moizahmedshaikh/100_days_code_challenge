//Question 103: Write a function that returns a random boolean value, true or false.

function random(): boolean {
  return Math.random() > 0.5;
}
console.log(random());

//Question 104: Create a function that generates a random hexadecimal color code.

function randomHexa() {
  const color ="#" +Math.floor(Math.random() * 0xfffefeee).toString(16).padStart(6, "0");
    return color;
}
console.log(randomHexa());

//Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
