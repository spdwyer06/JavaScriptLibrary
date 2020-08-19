/*
    SCOPE
*/

// JS has both LOCAL and GLOBAL scope

// Example 1

// Global
let x = 12;

function scope() {
    // Local
    let x = 33;
    console.log(x);
}

scope(); // logs 33
console.log(x); // logs 12

// Example 2

var y = 12;
// To reassign the variable in the function it needs to be initiated with var
// let y = 12;

function scope() {
    y = 33;
    console.log(y);
}

scope();
console.log(y);

// Example 3

var x = 1;

function scope() {
    var x = 2;
    function scopeInner() {
        var x = 3;
        console.log(x); // logs 3
    }

    scopeInner();
    console.log(x); // logs 2
}

scope();
console.log(x); // logs 1

// Example 4 (contrasts with ex. 5)

var x = 12;

function scope() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x); // logs 45
    }
    console.log(x); // logs 33
}

scope();
console.log(x); // logs 12

// Example 5
var x = 12;

function scope() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x); // logs 45
    }
    console.log(x); // logs 45 -> var doesn't obey 'block' scope
}

scope();
console.log(x); // logs 12
