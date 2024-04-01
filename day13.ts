// Question 37: Large Shirts: Default values in make_shirt().

function makeShirt(size: string = 'large', text: string = 'I love typescript') {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}
makeShirt()
makeShirt('medium')

// different message 
makeShirt('small', 'need a big shirt to wear');



// Question 38: Cities: Describing cities with a function.

function describe_city(city: string, country: string = 'pakistan'): void {
    console.log(`${city} is in ${country}`);

}

describe_city('karachi')
describe_city('Fraunce', 'Europe')
describe_city('lahore', ' punjab');



// Question 39: City Names: Formatting city-country pairs.

function citycountry(city: string, country: string): string {
    return `${city}, ${country}`
}
let c1 = citycountry('lahore', 'pakistan')
let c2 = citycountry('tokyo', 'japan')
let c3 = citycountry('paris', 'france')
console.log(c1);
console.log(c2);
console.log(c3);