/*
    TYPES
*/

// Dark blue text refers to a reserved keyword

/*
    BOOLEAN
*/

var isOn = true;
console.log(isOn);

let isOff = false;
console.log(isOff);

// bool can represent: true/false, yes/no, on/off, 0/1

/*
    UNDEFINED
      (usually means a variable has been declared, but it's not been assigned a value)
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

/*
    Null
     (means a variable has been declared and assigned a value of null)
*/

var empty = null;
console.log(empty);

/*
Null and Undefined both represent variables with no value inside. Null is intentional, Undefined is accidental
*/

/*
    NUMBERS
*/

let myAge = 90;
console.log(myAge);

let precise = 999999999999999; // 15 digits
console.log(precise);

let negPrecise = -999999999999999;
console.log(negPrecise);

let rounded = 9999999999999999; // 16 digits
console.log(rounded);

let negRounded = -9999999999999999;
console.log(negRounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

/*
    STRINGS
        any value within quotes
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

// Concatenation vs. Addition
let first = 105 + 100;
let second = '1050' + '100';
let third = 1050 + '100';
console.log(first);
console.log(second);
console.log(third);
console.log(typeof third); // typeof: returns the variable type

// Interpolation
//      lets you use strings with dynamic content (require `backticks`)

// Example 1:
let age = 28;
let string = `my age is: ${age}`;
console.log(string);
console.log(`my age is: ${age + 1}`);

/*
    OBJECTS
*/

// Object - a container that stores property names and their values, can hold multiple data types
// Denoted by {}
// Have keys and values -- color (key): 'blue' (value)
//      separated with a colon, each key-value pair is separated with a comma

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.age);
console.log(typeof hulk);

/*
    ARRAYS
*/

// Store multiple values in an ordered way, can hold multiple data types
// Denoted by []
// Values are separated by commas
// First value has an index of 0

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush'];
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);
console.log(stepsToBrushTeeth[5]); // undefined (out of array range)
console.log(typeof stepsToBrushTeeth);

