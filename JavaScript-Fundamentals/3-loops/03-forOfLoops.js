/*
    FOR OF LOOPS
*/

// Grabs the value of the 'thing' not just the index
// Iteration requires numbered 'things' to work through

// Keys in an object are not numbered
// let student = { name: 'Maria', isAwesome: true, degree: 'Javascript', week: 2 };

// for (item of student) {
//     console.log(item);
// }

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray) {
    console.log(cat, 'says meow');
}