"use strict";
// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
let fav_pizza = ["chikken", "beef", "cheese"];
for (let pizza of fav_pizza) {
    console.log(`i like ${pizza} pizza`);
}
;
console.log("i really like pizzas");
// Animals: Highlight animals with a common trait.
let animals = ["rabbit", "horse", "cat",];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet`);
}
;
console.log("Any of these animals would make a great pet!");
// T-Shirt: Create a function for customizing t-shirts
function make_shirt(size, text) {
    console.log(`\n you selected ${size} shirt with ${text} print on shirt`);
}
make_shirt("large", '"sky is the limited"');
make_shirt("small", '"whole world"');
