var dateFunction = new Date();
var currentDay = dateFunction.getDate();
var currentMonth = dateFunction.getMonth();
var outputMonth = currentMonth;

switch(currentMonth) {
    case 0:
        outputMonth = "January";
        break;
    case 1:
        outputMonth = "February";
        break;
    case 2:
        outputMonth = "March";
        break;
    case 3:
        outputMonth = "April";
        break;
    case 4:
        outputMonth = "May";
        break;
    case 5:
        outputMonth = "June";
        break;
    case 6:
        outputMonth = "July";
        break;
    case 7:
        outputMonth = "August";
        break;
    case 8:
        outputMonth = "September";
        break;
    case 9:
        outputMonth = "October";
        break;
    case 10:
        outputMonth = "November";
        break;
    case 11:
        outputMonth = "December";
        break;
    default:
        outputMonth = "no Month defined";
        break;
}

alert(currentDay + " " + outputMonth);