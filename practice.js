const readline = require("readline-sync");

let firstPrompt = readline.question("Hello! Please select a word: ");

console.log("You selected the word: " + firstPrompt);

let secondPrompt = Number(
  readline.question(
    "Great! Now select an index number and we will find the character at that location: "
  )
);

console.log("You selected the index value: " + secondPrompt);

let thirdPrompt = firstPrompt[secondPrompt];

console.log(
  "The character at the index " + secondPrompt + " is: " + thirdPrompt
);

console.log("Congratulations, you have completed this activity!");
