/*
    IF ELSE CONDITIONALS
*/

let temp = 75;

if (temp < 70) {
    console.log('Wear a jacket');
}
else {
    console.log('No jacket necessary');
}

// You can blend complex conditionals and if-else statements based upon your need
if (temp > 70 && typeof temp === 'number') {
    console.log('This weather is amazing!');
}
else {
    console.log('Either the temp is cool, the variable is not a string, or both!');
}

/*
    ELSE-IF
*/

let age = 28;

if (age >= 25) {
    console.log('You old!');
}
else if (age >= 21) {
    console.log('Drinking time!');
}
else if (age >= 18) {
    console.log('You an adult!');
}
else {
    console.log('You is just a youngin');
}