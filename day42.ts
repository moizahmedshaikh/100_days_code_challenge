//Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

let obj = {
  name: "Moiz Ahmed",
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName());

//Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

let id = {
  name: "Moiz Ahmed",
  id: 3623,
  getId: function () {
    return this.id;
  },
};
console.log(id.getId());

//Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

const myObj = {
  name: "Moiz Ahmed",
  outerMethod: function () {
    console.log(this.name);

    const innerMethod = () => {
      console.log(this.name);
    };
    innerMethod();
  },
};
myObj.outerMethod();
