/*
    ARROW FUNCTIONS
*/

// Arrow functions do not get hoisted

// Normal function declaration
function someFunction() { return 'something'; }

// Normal function expression (for unnamed functions)
let tea = function () {
    return 'tea is great!';
}

console.log(someFunction());
console.log(tea());

// Arrow functions are always anonymous (like the function expression above)
let hotChocolate = () => {
    return 'CHOCOLATES!!!'
}

console.log(hotChocolate());

let animals = (kittens, puppies) => { return `I have ${kittens} cat(s) and ${puppies} dog(s)` };

console.log(animals(3, 2));
console.log(animals(0, 0));

/*
    CONCISE BODY VS. BLOCK BODY
*/

// Concise Body (using just 1 line (no return keyword needed))
let apples = x => `There are ${x} apples`;
console.log(apples(10));

let func = () => 'hi';
console.log(func());

// Block Body
let bananas = (x) => {
    return `There are ${x} bananas`;
}
console.log(bananas(5));

// Return must be explicitly written in a block-body arrow function


