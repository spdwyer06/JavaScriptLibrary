//1                //2
let bobAlcorn = {
    //3         //4
    name: "Bob Alcorn",
    age: 59,
    vocation: "Chief Operating Officer",
    isRetired: false
};

/*
1. Use the let keyword, create a name and add an equal sign (=).
2. Next, add { }.
3. name, age, vocation, and isRetired are properties or keys of the object. Each has a colon (:) preceding the value.
4. Each of the properties has a value. "Bob Alcorn"   59   "Chief Operating Office"   false.
*/

console.log(bobAlcorn); // Prints the whole object
console.log(bobAlcorn.name); // Prints the value of the name property
console.log(bobAlcorn.age); // Prints the value of the age property
console.log(bobAlcorn.middleName); // undefined: middleName does not exist

