// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

//Version that passes:
let aliencolor = "red";
if (aliencolor === "red") {
  console.log("you earned five points!");
}

//Version that fails(No Output)
aliencolor = "red";
if (aliencolor == "green") {
  // No output because the condition is false
}

// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

//version that runs the if block:
let alienColor = "yellow";
if (alienColor === "yellow") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("you just earned 10 points");
}

//version that runs the else block:
alienColor = "yellow";
if (alienColor === "red") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("you just earned 10 points");
}

// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

//Yellow Alien Version
let Aliencolor = "yellow";
if (Aliencolor === "yellow") {
  console.log("you earned 5 points.");
} else if (Aliencolor === "red") {
  console.log("you earned 10 points.");
} else if (Aliencolor === "green") {
  console.log("you earned 15 points");
}

//red Alien Version
let Alien_color = "red";
if (Alien_color === "green") {
  console.log("you earned 5 points.");
} else if (Alien_color === "red") {
  console.log("you earned 10 points.");
} else if (Alien_color === "yellow") {
  console.log("you earned 15 points");
}

//green Alien Version
let AlienColor = "green";
if (AlienColor === "yellow") {
  console.log("you earned 5 points.");
} else if (AlienColor === "red") {
  console.log("you earned 10 points.");
} else if (AlienColor === "green") {
  console.log("you earned 15 points");
}
