"use strict";
// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age = 4;
if (age <= 2) {
    console.log("the person is baby");
}
else if (age <= 4) {
    console.log("the person is toddler");
}
else if (age <= 13) {
    console.log("the person is kid");
}
else if (age <= 20) {
    console.log("the person is teenager");
}
else if (age <= 65) {
    console.log("the person is elder");
}
else {
    console.log("the person is elder");
}
;
// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let fruits = ["Pomegranate", "pineapple", "mango", "apple"];
if (fruits.includes("Pomegranate")) {
    console.log(" wow you like pogemgrate");
}
else if (fruits.includes("pineapple")) {
    console.log(" wow you like pineapple");
}
;
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
let usernames = ["moiz ahmed", "hamza", "usama", "ali"];
usernames.forEach(usernames => {
    if (usernames === "moiz ahmed") {
        console.log(" Assalam-u-Alaikum Admin, would you like to see a status?");
    }
    else {
        console.log(`Assalam-u-Alaikum ${usernames}, thank you for logging in again.`);
    }
});
