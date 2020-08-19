/*
    LOOPS
*/

// Loops offer a quick and easy way to do something repeatedly
// There are many different kinds of loops but they all do roughly the same thing:
//      For Statement
//      Do while
//      While
//      Labeled
//      Break
//      Continue
//      For in
//      For of
//      .forEach (just for arrays)
//      .map (just for arrays)

// loop structure: 
//      a) Creation of an indexing variable
//      b) A run condition
//      c) Change to the indexing variable

// Count from 0 - 10 and log the numbers
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Loops can run infinitely 
// DO NOT RUN!!!!! WILL HAVE TO EXIT VS CODE IF YOU DO...TRUST ME!
// for (let i = 0; ; i++) {
//     console.log(i);
// }

// Counts from 2 to -25 by -3 and logs the numbers
for (let i = 2; i >= -25; i -= 3) {
    console.log(i);
}

// Display the letters in a name individually
let name = 'Maria';

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// For loops can use lots of variables
let start = 2;
// Get a random number and multiply it by 30 and remove any decimal places (make it a whole number)
let stop = Math.floor(Math.random() * 30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment) {
    console.log(i);
}