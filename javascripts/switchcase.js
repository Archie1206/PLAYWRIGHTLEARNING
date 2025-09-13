var monthName = "April";
var monthNumber = 0;

//switch case 
// limitation - only works for equal statements
// relational statement is not allowed in case statement
// if i>10
//case statement keep running until it gets break statement

switch(monthName){
    case "Jan":
    monthNumber = 1;
    break;

    case "Feb":
    monthNumber = 2;
    break;

    case "Mar":
    case "MAR":
    case "March":
    case "MARCH":    
    monthNumber = 3;
    break;

    default:
        monthNumber=-1;
}
console.log(monthName +" = "+ monthNumber);