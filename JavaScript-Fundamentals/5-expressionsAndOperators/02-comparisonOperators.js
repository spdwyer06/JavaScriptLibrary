/*
    COMPARISON OPERATORS
*/

// Equality Comparison Operator (evaluates as true if both values are equal)
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == '4');

// Strict Equality Comparison Operator (evaluates as true only if both the value and type are equal)
console.log(3 === 3);
console.log(3 === '3');

// Not Equal Comparison Operator (evaluates as true if both values are not equal)
console.log('3' != 4);
console.log('3' != 3);

// Strict Not Equal Comparison Operator (evaluates as false only if both the value and type are equal)
console.log('3' !== 3);
console.log(3 !== 3);

// Greater Than Comparison Operator
console.log(3 > 2);
console.log(2 > 3);

// Less Than Comparison Operator
console.log(1 < 2);
console.log(2 < 1);

// Greather Than Or Equal To Comparison Operator
console.log(3 >= 2);
console.log(3 >= 3);

// Less Than Or Equal To Comparison Operator
console.log(1 <= 2);
console.log(2 <= 1);

// And Comparison Operator (evaluates as true if both expressions are true)
console.log(1 < 2 && 3 > 0);
console.log(1 < 2 && 0 > 3);

// Or Comparison Operator (evaluates as true if atleast 1 expression is true)
console.log(1 < 2 || 3 > 0);
console.log(1 < 2 || 0 > 3);
console.log(2 < 1 || 0 > 3);

// Complex types don't compare as primitive types 
//      doesn't care if the contents are the same, but rather that they are the same 'thing'
let obj = { key: 'test' };
console.log(obj == { key: 'test' }); // logs false
console.log(obj == obj); // logs true

let array = [1, 2, 3, 4];
console.log(array == [1, 2, 3, 4]);
console.log(array == array);