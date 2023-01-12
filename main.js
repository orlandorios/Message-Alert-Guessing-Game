console.log('JS loaded')

function gameRound() {
    console.log('gameRound was called')
    // declare function
let numberGuess;
// declare variable
let numberThinkingOf = Number(prompt("enter the number you are thinking of, must be an integer between 1 and 100."));
// get input from user, convert to a number, store in variale
let numberOfGuesses = 0
// declare variable and assign starting value of 0
while (numberGuess !== numberThinkingOf) {
    numberGuess = Number(prompt("Enter a number between 1 and 100"));
    if (numberGuess > numberThinkingOf) {
        alert("Too high, guess again");
        numberOfGuesses++
    }  else if (numberGuess < numberThinkingOf) {
        alert("Too low, guess again"); 
        numberOfGuesses++
    }     
} 
    numberOfGuesses++
    alert("Correct!")
    return numberOfGuesses
};

function playGame(nameArgument) {
    console.log('playGame was called')
    alert (`Yo, ${nameArgument}!` )
    let keepPlaying = 'y'
    while (keepPlaying === 'y' || keepPlaying === 'Y') {
        let guessTotal = gameRound()
        // assign the output of the function gameRound to guessTotal
        alert(`You finished the last round in ${guessTotal} guesses!`)
        keepPlaying = prompt('Do you want to play again, y or n?')
    }
}

function getPlayerName() {
    return prompt("What's ya name, fam?")
}

playGame(getPlayerName());
