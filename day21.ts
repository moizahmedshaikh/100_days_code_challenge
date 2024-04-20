//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum vehicles {
  car,
  truck,
  bike,
}

console.log(vehicles.bike);



//Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
  name: string;
  age: number;
  courses: string[];
}

let student: Student = {
  name: "moiz",
  age: 20,
  courses: ["Physics", "English", "Islamiat"],
};

console.log(student);



//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type shape = {
  kind: "circle" | "rectangular";
  radius?: number;
  width?: number;
  height?: number;
};

let circle: shape = {
  kind: "circle",
  radius: 5,
};

let rectangular: shape = {
  kind: "rectangular",
  width: 10,
  height: 20,
};

console.log(circle);
console.log(rectangular);
