// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

// Array of magician's names
let magicians: string[] = ["Ayesha", "hafsa", "Maryam", "Moiz"];

function make_great(magicians: string[]): string[] {
  let greatMagicians: any = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
  });
  return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names

// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
  console.log(`Making a sandwich with: ${items.join(", ")}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

// Question 45: Cars: Create detailed car objects with flexible properties.

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(
  manufacturer: string,
  model: string,
  ...extras: [string, any][]
): Car {
  let car: Car = {
    manufacturer: manufacturer,
    model: model,
  };
  for (let extra of extras) {
    car[extra[0]] = extra[1];
  }

  return car;
}
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2024]);

console.log(myCar);
