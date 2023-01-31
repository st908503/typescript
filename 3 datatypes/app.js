var a = 10;
var str = 'Hello';
var isTru = false;


function add(n1, n2) {
    return n1 + n2;
}
var result = add(90, 20);
console.log(result);


function add2(b1, b2) {
    return b1 + b2;
}
var result2 = add2('90', '20');
console.log(result);

function add3(c, d) {
    return c + d
}
const result3 = add3('5', 8)
console.log(result3)

//we can also do this without using data types in typescript directly in js with some conditions 
function add4(c, d) {
    if (typeof (c) === 'number' && typeof (d) === 'number') {
        return c + d
    }
    else{
        return new Error ('Not a number')
    }
}
const result4 = add4('5', 8)
console.log(result4)