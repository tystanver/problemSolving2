
// Write a C program to find maximum between two numbers using conditional operator.

const findMaximum = (num1, num2) => {
    const maximum = num1 > num2 ?
        num1 : num2;
    return maximum;
}
const num1 = 50;
const num2 = 80;
const result = findMaximum(num1, num2);
console.log('the maximum num is', result)


const Max = (a, b) => {
    let maximum;
    if (a > b) {
        maximum = a;
    }
    else { maximum = b }
    return maximum;
}
const got = Max(10, 20);
console.log(got);