// //Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

const helloPromis = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hellow World");
  }, 2000);
});

helloPromis.then((message) => {
  console.log(message);
});

//Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

const conditionPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    const number = Math.floor(Math.random() * 10);
    if (number > 5) {
      resolve("Succes");
    } else {
      reject(new Error("failure"));
    }
  }, 3000);
});

conditionPromise
  .then((message) => {
    console.log("your are", message);
  })
  .catch((error) => {
    console.error(error.message);
  });

//Question 144: Explain the use of the Promise.all() method with an example.

let promise1 = Promise.resolve(3);
let promise2 = 222;
let promise3 = new Promise<string>((all) => {
  setTimeout(all, 23, "lol");
});

Promise.all([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
