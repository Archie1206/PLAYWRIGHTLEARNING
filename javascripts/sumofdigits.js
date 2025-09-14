let i = 1279;
let sum = 0;

//for(;i!=0;){
while(i!=0){
let lastDigit = i % 10;
i = Math.floor(i / 10);
sum = sum + lastDigit;
console.log("lastDigit = "+lastDigit);
console.log("i = "+i);
console.log("Sum = "+sum);
console.log("-----------");
}

//(a+b)2 = a2 + b2 +2ab
//write code to get this formula

let a = 2;
let b = 3;
part1 = a*a;
part2 = b*b;
part3 = 2*a*b;
console.log("value of a2 = "+part1);
console.log("value of b2 = "+part2);
console.log("value of 2ab = "+part3);
formula = (a*a) + (b*b) + 2*a*b;
console.log("value of a2 + b2 + 2ab = "+formula);
