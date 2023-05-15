let number = 15;
const evenOdd = (number) => {
    let num;
    if (number % 2 == 0) {
        num = 'num is even';
    }
    else {
        num = 'num is odd';
    }
    return num;
}
const result = evenOdd(number);
console.log(result);
const EvenOdd = (number2) => {
    const result = number2 % 2 == 0 ? 'this is an even num' : 'this is an odd num';
    return result;
}
const result2 = EvenOdd(45);
console.log(result2)