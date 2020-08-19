/*
    VARIABLES
*/

var a = 1;
var b = 2;
console.log(a + b);

/*
Notes on naming a vairable:
    1) A variable must begin with a letter, underscore, or dollar sign
    2) Numbers may follow the above characters, but can't come first
    3) JS is case sensitive -- 'hello' and 'Hello' are different variables
*/

/*
    DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

// Declarations refer to when we 'declare' a variable
// Initializations refer to when a variable is assigned a value
// Assignment refers to giving a variable a value, can be after initialization

var x;
console.log('Declaration 1:', x); // undefined
x = 10;
console.log('Initialization 1:', x); // 10
x = 33;
console.log('Assignment 1:', x); // 33

var y;
console.log('Declaration 2:', y)
y = 'hello';
console.log('Initialization 2:', y);
y = 'you are my friend';
console.log('Assignment 2:', y);

/*
    VAR, LET, CONST
*/

// var = 'old' keyword for variables
// let = 'new' leyword for variables (introduced with ES6)
// const = also 'new', declares unchangeable variables

let tonight = 'great!';
const elevenFifty = 'amazing!';
console.log(tonight, elevenFifty);
tonight = 'lovely!';
console.log(tonight, elevenFifty);
