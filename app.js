console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Jesse";
let lastName = "Mascorro";
var age = 33;

// Exercise 2
let fullName = firstName + " " + lastName;
let templateFullName = `${firstName} ${lastName}`;
console.log("fullName: ", fullName);
console.log("templateFullName: ", templateFullName);

// Exercise 3
let myStory;
let city = "Winnsboro";
let passtime = "playing discgolf";

myStory = `Hello! My name is ${fullName}. I Live in ${city}. I enjoy ${passtime} and coding!`;
console.log(myStory);