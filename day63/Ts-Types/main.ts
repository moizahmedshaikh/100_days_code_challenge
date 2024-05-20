/********************
 * TYPE ANNOTATIONS *
 ********************/

let myNumberExOne: number = 42;
let myStringExOne: string = "Hello, TypeScript";

console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);


// Another way to write this code is as follows:
let myNumberExTwo: number;
let myStringExTwo: string;

myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";

console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);



/******************************
 * DYNAMIC TYPE DETERMINATION *
 ******************************/

let greeting = "Hello, world!";
console.log(greeting);



/************
 * ANY TYPE *
 ************/

let myVariable: any = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable)