var ranNumber = Math.floor(Math.random() * 100);
var guess = 0;
var counterGuess = 0;

function checkGuess() {
    guess = document.getElementById("input").value;
    counterGuess++;

    if(guess < ranNumber){
        document.getElementById("output").value = "You need to guess higher!" + "\n" + "Number of tries: " + counterGuess;
    }
    else if(guess > ranNumber){
        document.getElementById("output").value = "You need to guess lower!" + "\n" + "Number of tries: " + counterGuess;
    }
    else if(guess == ranNumber){
        document.getElementById("output").value = "You guessed Right!" + "\n" + "Number of tries: " + counterGuess;
    }    
}

function reset() {
    location.reload();
}
