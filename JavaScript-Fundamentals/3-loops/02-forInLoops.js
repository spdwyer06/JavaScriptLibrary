/*
    FOR IN LOOPS
*/

let student = { name: 'Sean', isAwesome: true, degree: 'JavaScript', week: 2 };

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

// For-in loop that capitalizes the first letter of a name
let name = 'sEaN';
let capName;

for (i in name) {
    if (i == 0) {
        capName = name[i].toUpperCase();
    }
    else {
        capName += name[i].toLowerCase();
    }
}

console.log(capName);

