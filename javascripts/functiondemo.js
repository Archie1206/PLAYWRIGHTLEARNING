function calculateTotalAmount(principal, rate, time){
    let interest = (principal*rate*time)/100;
    let total = principal+interest;
    return total;
}

//we can also write above function by using "=> and let" in order to create it as a constant
/*
let calculateTotalAmount(principal, rate, time) => {
    let interest = (principal*rate*time)/100;
    let total = principal+interest;
    return total;
}
    */

function printValue(){
console.log()
}

let total = calculateTotalAmount(1000 * 8 * 1);
printValue(total);