//union type describes a value that can be of several types
// so in union we can use multiple data types with pipe symbol or (or symbol)
var data = 10;
function combine(a, b) {
    return a + b;
}
console.log(combine(10, 20));
//now if we want string value with a and b we can do as below
function combine2(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine2('aman', 'sunil'));
