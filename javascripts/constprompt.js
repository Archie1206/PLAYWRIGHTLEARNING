//this code is used to take input from user in console
//installed and saved in package.json using -> npm install prompt-sync --save

const prompt = require("prompt-sync")();

let value = prompt("Enter Your Value: ");
console.log("Hello, " + value);