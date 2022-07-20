// declare variable
let numberGuess;
// assign a value to the variable
numberGuess = Number(prompt("Enter a number between 1 and 100"));

// this is the number that the user will guess
let numberThinkingOf = 10;

// TODO make sure user guess is a number

if (numberGuess > numberThinkingOf) {
    alert("Too high, guess again");
} else if (numberGuess < numberThinkingOf) {
    alert("Too low, guess again");
} else {
    alert("You're right!")
}
