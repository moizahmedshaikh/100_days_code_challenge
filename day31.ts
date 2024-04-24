//Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

let favFruits: string[] = ["mango", "apple", "banana"];
console.log(favFruits);
favFruits.push("watermellon");
console.log(favFruits);

//Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(arr: T[]): T | undefined {
  return arr.pop();
}

const Fruits: string[] = ["mango", "apple", "banana"];
console.log(removeLastElement(Fruits));
console.log(Fruits);

//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replaceBananaWithMango(fruit: string[]): void {
  const index = fruit.indexOf("banana");
  if (index !== -1) fruit[index] = "mango";
}

const Fruit: string[] = ["orange", "apple", "banana"];
replaceBananaWithMango(Fruit);
console.log(Fruit);
