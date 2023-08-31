"use strict";

let inventedNumber;
let upperLimit = 100;
let guessedNumber;
let numberOfTrials = 0;

inventedNumber = Math.random() * upperLimit;
inventedNumber = Math.round(inventedNumber + 0.5);

do{
    guessedNumber = prompt("Guess", "a number up to " + upperLimit);
    
    if(guessedNumber > inventedNumber ){
        alert("Your guessed number is too big");   
    }
    if(guessedNumber < inventedNumber ){
        alert("Your guessed number is too small");
    }   
    numberOfTrials = numberOfTrials +1;
} while(guessedNumber != inventedNumber);

if(guessedNumber == inventedNumber ){
    alert("You guessed right");
}
document.querySelector('.text-output').innerHTML = "You guessed " + numberOfTrials + " times";