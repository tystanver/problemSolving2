// Write a C program to check whether year is leap year or not using conditional operator.
const year = 2023;

const findLeapYear = (year) => {
    let leap;
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
        leap = 'this year is a leap year'
    }
    else {
        leap = 'this year  is not a leap year'
    }
    return leap;
}
const result = findLeapYear(year);
console.log(result)
