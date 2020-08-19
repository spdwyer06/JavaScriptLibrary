/*
    TERNARIES
*/

let x = 9;

(x > 0) ? console.log('x is positive') : console.log('x is negative');

// Same way, if/else format
if (x > 0) {
    console.log('x is positive');
}
else {
    console.log('x is negative');
}


let greeting = 'hello';

greeting.length > 10 ? console.log("That's a long greeting!")
    : greeting.length == 10 ? console.log('Your greeting is exactly 10 characters!')
        : console.log('What a normal greeting!');

if (greeting.length > 10) {
    console.log("That's a long greeting!");
}
else if (greeting.length == 10) {
    console.log('Your greeting is exactly 10 characters!');
}
else {
    console.log('What a normal greeting!');
}

