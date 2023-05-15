let string = 5;
const isAlpha = (string) => {
    const result = (/[a-zA-Z]/).test(string) ? "yes" : "no";
    return result;

}
const cheek = isAlpha(string);
console.log(cheek);