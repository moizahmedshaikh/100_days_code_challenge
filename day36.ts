//Question 106: Determine if a given year is a leap year using comparison operators.

function leapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2024));

//Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

function divisible(number: number): boolean {
  return number % 2 === 0 && number % 3 === 0;
}
console.log(divisible(12));
console.log(divisible(3));

//Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function comparisonString(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(comparisonString("Hellow", "hellow"));
console.log(comparisonString("hellow", "helo"));
