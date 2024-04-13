//Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

let smartphone = {
    make: "Realme",
    model: "C21",
    specs:{
        Storage: "32GB",
        screenSize: "6.5",
        battery: "5000mah"
    }

};
console.log(smartphone);



//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let developerSkills = {
    languages: ["javaScript", "python", "C++"],
    frameWorks: ["react", "angular", "vue"],
    tools: ["git", "webPack", "docker"]
};
let {languages, frameWorks, tools} = developerSkills;
console.log(`language ${languages[2]} framework ${frameWorks[0]} and tool ${tools[0]}`);



//Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.


function createObjectWithDynamicKey (key: string, value: string) {
    let dynamicObject : any = {};

    dynamicObject[key] = value;
    return dynamicObject;
}

let userPreference = createObjectWithDynamicKey("theme", "dark"); 
console.log(userPreference);





