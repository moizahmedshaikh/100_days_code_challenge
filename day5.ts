//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transports = ["unique bike", "toyota car", "electric cycle"];
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});



// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest = ["aman", "muzzamil", "hamza"];
guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner`);
})



// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let guestArr : string[] = ["moiz","aman", "Ali","Hamza"] ;

let canNotAttend :string = "moiz";
console.log(canNotAttend + " "+ "can not attend the dinner.");

let newguest :string="muzammil";
guestArr [guestArr.indexOf(canNotAttend)] = newguest;
console.log(guestArr);

guestArr.forEach(guestArr=>console.log(`Dear ${guestArr},you are invited to the dinner`));