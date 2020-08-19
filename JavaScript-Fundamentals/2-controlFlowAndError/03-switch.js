/*
    SWITCH STATEMENTS
*/

let friend = 'Sean';

switch (friend) {
    case 'Tom':
        console.log('Hey Tom, when will you bring bread for me?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, do you own a wolf in your backyard?');
        break;
    case 'Alex':
        console.log('Hey Alex, how many Magic cards do you own?');
        break;
    default:
        console.log(`I'm sorry ${friend}, but do I know you?`);
}

let yup = true;

switch (typeof yup == 'string' || typeof yup == 'boolean') {
    case true:
        console.log('Yup is a string or a boolean');
        break;
    default:
        console.log('Yup is not a string or a number');
}