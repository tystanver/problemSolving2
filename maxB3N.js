// Write a C program to find maximum between three numbers using conditional operator.

let num1 = 10;
let num2 = 20;
let num3 = 40;
const maxNum = (num1, num2, num3) => {
    let maxNum;
    if (num1 > num2 && num1 > num3) {
        maxNum = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        maxNum = num2;
    }
    else { maxNum = num3 }
    return maxNum;
}
const result = maxNum(num1, num2, num3);
console.log('max num is ', result);