//1        //2
function hello() {
    //3
    console.log("Hello World!");
}

/*
1. Use the function keyword.
2. Name the function hello. We'll explain the parentheses later.
3. Execute code.
*/

function pacersWon() {
    console.log("Pacers won!");
}
pacersWon();

function numberEntered(num) {
    console.log("The number you entered was: ", num);
}
numberEntered(5);

function addAnyTwoNumbers(x, y) {
    console.log(x + y);
}
addAnyTwoNumbers(4, 5);

function subtractTwoNumbers(firstNum, secondNum) {
    console.log(firstNum - secondNum);
}
subtractTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits) {
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91));

function add(x, y) {
    return x + y;
}
console.log(add(1, 1));

function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));

function calculatePriceIndiana(quantity, price) {
    return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));