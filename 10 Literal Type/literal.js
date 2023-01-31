//Literal is somewhat similar to unions but In literaals we apply value rather than appying data type to a variable or parameter
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20));
console.log(combine('aman', 'sunil'));
// here we had only two values so we checked the data type by condition but if we have multiple values
function combine2(a, b, type) {
    if (type === 'as-number') {
        //if as-number
        return (+a) + (+b);
    }
    else {
        // else if as-string
        return a.toString() + b.toString();
    }
}
console.log(combine2(10, 20, "as-number"));
console.log(combine2('aman', 'sunil', "as-string"));
// let type: 'as-number' | 'as-string' = 10
//this will give error
//  let type: 'as-number' | 'as-string' = 'as-string'
//this will not give error
