let amIRunning = true;
let totatnumberRequired = 2;

let firstNumber = 0;
let secondNumber = 1;
while(amIRunning){
    let sum = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = sum;

    //to print non-fibonacci numbers
    for(let j = firstNumber+1 ; j < secondNumber ; j++){
        console.log(j);
    }

    totatnumberRequired++;
    if(totatnumberRequired == 10){
        console.log(sum); //will give 10th digit in fibonacci
        amIRunning = false;
    }

}