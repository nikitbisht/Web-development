//Prompt the user to enter their full name. generate a username for them based on the input.
let fullName = prompt("Enter your name: ");

let userName = `@${fullName+fullName.length}`;

console.log("User name is:-",userName);