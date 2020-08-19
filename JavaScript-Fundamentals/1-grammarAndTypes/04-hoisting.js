/*
    HOISTING
*/

// Example 1

// JS is able to know that the variable scissors is a defined 
//      variable, even though it is initialized after the console log
console.log(scissors); // logs undefined
var scissors = 'blue';

// Breakdown
var scissors;
console.log(scissors);
scissors = 'blue';

// Example 2
function hoistTest() {
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

// Breakdown
function hoistTest() {
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();