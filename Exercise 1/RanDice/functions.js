var dice = 0;
var diceCount = 0;
var counterForOne = 0;
var counterForTwo = 0;
var counterForThree = 0;
var counterForFour = 0;
var counterForFive = 0;
var counterForSix = 0;

for(diceCount = 0; diceCount <= 1000; diceCount++) {
    dice = Math.floor(Math.random() * 6) + 1;
    switch(dice){
        case 1:
            counterForOne++;
            break;
        case 2:
            counterForTwo++;
            break;
        case 3:
            counterForThree++;
            break;
        case 4:
            counterForFour++;
            break;
        case 5:
            counterForFive++;
            break;
        case 6:
            counterForSix++;
            break;
        default:
            alert("Error!");
    }    
}
alert("1: " + counterForOne + "\n" + "2: " + counterForTwo + "\n" + "3: " + counterForThree + "\n" + "4: " + counterForFour + "\n" + "5: " + counterForFive + "\n" + "6: " + counterForSix);

