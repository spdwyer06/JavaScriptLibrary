/*
for([initialExpression]; [condition]; [incrementExpression]){
    [statement]
}

initialExpression - sets the starting value of a loop control variable (LCV).  In the example following, i is the LCV.
condition - is evaluated, if true, stay in the loop, otherwise exit the loop. condition is i <= 10.
incrementExpression - updates the LCV. i++ adds 1 to i.

*/
// Loop from 1 to 100 by 1s.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Loop from  0 to 50 by 5s.
for (var i = 0; i <= 50; i += 5) {
    console.log(i);
}

// Loop from 20 to 1 by -1s.
for (var i = 20; i >= 1; i--) {
    console.log(i);
}

// Loop starting at 3, and increments by 5, but doesn't go over 30.
for (var i = 3; i < 30; i += 5) {
    console.log(i)
}

function pacersWon() {
    console.log("Pacers won!");
}

for (let i = 0; i < 5; i++) {
    pacersWon();
}

