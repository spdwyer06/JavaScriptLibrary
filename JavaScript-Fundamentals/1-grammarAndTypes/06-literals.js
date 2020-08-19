/*
    LITERALS
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(weekDays.toString());
console.log(weekDays[1]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'potato'
}
console.log(soup.c);

// Array and object literals can hold primitive and 'complex' types (arrays, object, functions)
let complexArrayLiteral = [1, true, 'Academy', [1, 2, 3], { key: 'test' }, function () { return 'yes' }];
console.log(complexArrayLiteral[5]);
console.log(complexArrayLiteral[3]);

let complexObjectLiteral = {
    num: 1,
    bool: true,
    string: 'Academy',
    array: [1, 2, 3],
    object: { key: 'test' },
    func: function () { return 'yes' }
};

console.log(complexObjectLiteral.func());
console.log(complexObjectLiteral.array);