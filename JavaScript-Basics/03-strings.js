console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

var tweet = "Lebron is king! Westbrook for president!";
let facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = 'jamespauloconnor';

let age = "21";
let years = "3";
console.log(age + years);

// Concatenation
var birthCity = "Indianapolis ";
var birthState = "Indiana";
console.log(birthCity + ", " + birthState);

var myBirthCity = 'Chicago';
var myBirthState = 'IL'
console.log(myBirthCity + ', ' + myBirthState);

// Coercion (turning numbers into strings)
let ageInAugust = 40;
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
const commaWithSpace = ", ";
console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);
console.log('I graduated from ' + highSchool + ' in ' + graduatedHighSchool + '.');

//length - returns the length of a string (including spaces)
console.log(highSchool.length);

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); // Extracts from highSchool[0] to and including highSchool[11]