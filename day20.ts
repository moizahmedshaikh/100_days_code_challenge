//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function averageScore(...score: number[]): number {
    let total = score.reduce((sum, score) => sum + score, 0);
    return total / score.length
};


console.log(averageScore(90, 34, 324, 3243, 343));



//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function makeAdder(valueToAdd: number): (number: any) => number {

    return function (number: number): number {
        return number + valueToAdd;
    };
};
let addFive = makeAdder(5);
console.log(addFive(10));



//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let userProfile = (function () {
    let name = "moiz";
    let age = 20;

    return{
        displayInfo: function (){
            console.log(`Name: ${name} Age: ${age}`);
            
        }
    };
})();

userProfile.displayInfo();