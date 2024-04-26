//Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

let numbers = 0;
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

let num = 10;
while (num > 0) {
  if (num === 5) {
    break;
  }
  console.log(num);
  num--;
}

//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

function vovelFound(str: string) {
  let vovels = "aeiouAEIOU";
  for (const char of str) {
    if (vovels.includes(char)) {
      console.log(`First Vovel Word Found: ${char}`);
      break;
    }
    console.log(char);
  }
}
vovelFound("moizahmed");
