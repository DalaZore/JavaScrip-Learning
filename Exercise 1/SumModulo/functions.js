var forLoopCounter;
var sumOfAllStraights = 0;

for (forLoopCounter = 0; forLoopCounter <= 10000; forLoopCounter++) {
    if (forLoopCounter % 2 == 0) {
        sumOfAllStraights = sumOfAllStraights + forLoopCounter;
    }
}
alert(sumOfAllStraights);