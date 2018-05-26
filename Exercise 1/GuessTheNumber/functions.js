<<<<<<< HEAD
var ranNumber = Math.floor(Math.random() * 101);
var guessedNumber = 0;
=======
var ranNumber = Math.floor(Math.random() * 100);
var guess = 0;
>>>>>>> master
var counterGuess = 0;

function checkGuess() {
    guess = document.getElementById("input").value;
    counterGuess++;

<<<<<<< HEAD
    if(guessedNumber < ranNumber){
        document.getElementById("output").value = "You need to guess higher!" + "\n" + "Number of tries: " + counterGuess;
    }
    else if(guessedNumber > ranNumber){
        document.getElementById("output").value = "You need to guess lower!" + "\n" + "Number of tries: " + counterGuess;
    }
    else if(guessedNumber == ranNumber){
=======
    if(guess < ranNumber){
        document.getElementById("output").value = "You need to guess higher!" + "\n" + "Number of tries: " + counterGuess;
    }
    else if(guess > ranNumber){
        document.getElementById("output").value = "You need to guess lower!" + "\n" + "Number of tries: " + counterGuess;
    }
    else if(guess == ranNumber){
>>>>>>> master
        document.getElementById("output").value = "You guessed Right!" + "\n" + "Number of tries: " + counterGuess;
    }    
}

function reset() {
    location.reload();
}
