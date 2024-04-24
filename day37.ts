//Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

const currentTime = new Date();
if (currentTime.getHours() < 12) {
  console.log("Good Morning");
}

//Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function grades(score: number): any {
  if (score >= 90) {
    console.log("A Grade");
  } else if (score >= 80) {
    console.log("B Grade");
  } else if (score >= 70) {
    console.log("C Grade");
  } else if (score >= 60) {
    console.log("D Grade");
  } else {
    console.log("F Grade");
  }
}

grades(77);

//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function ageGroup(age: number): string {
  if (age < 13) {
    return "A Child";
  } else if (age <= 19) {
    return "A Teenager";
  } else {
    return "Adult";
  }
}

console.log(ageGroup(5));
