/*
    FUNCTIONS
*/

// General Ideas: at their broadest level, functions do the foolowing:
//      1) Take some input which the function will handle/process
//      2) Process the input given to them
//      3) Usually, but not always, return some value
//      4) Can be invoked (used) as many times as needed, cutting down on code repetition

// Example 1
function newFunction(num) {
    return num + 1;
}

console.log(newFunction(8));
console.log(newFunction(2));
console.log(newFunction(10));
console.log(newFunction(-2));

// Example 2
function sentence(firstName, lastName) {
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Sean', 'Dwyer'));
console.log(sentence('Maria', 'Fey'));

let superImportantSentence = sentence('Super', 'Important');
console.log(superImportantSentence);

// Example 3 (function that take a complex type)
let array = [1, true, { key: 'string' }, [0, false, null], 'hola!'];
let numArray = [5, 6, 7, 8, 9, 10];

function iteratorFunction(inputArray) {
    for (let element of inputArray) {
        console.log(element);
    }
}
// Function is considered to have 'side effects' since it console logs everything 
//      within the function instead of just returning a value

iteratorFunction(array);
iteratorFunction(numArray);