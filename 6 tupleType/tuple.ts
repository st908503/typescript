let role = ['admin', 'manager'];

// for definig array data type

let role1: string[] | number[] = ['admin', 'manager'];
//this tells our array either contain string or number not boh together


// now for tuple
let role2 = ['admin', 'manager' , 34, 76, true, 65, 'ret'];

let role3: [string, string, number, number, boolean, number, string] = ['admin', 'manager' , 34, 76, true, 65, 'ret'];


//now we can only push the data of string at index 1 or data with number at index 2 etc
role3.push(true)
role3[1] = 'user'
role3[4] = 345345 // this will give error because it was expecting a boolean value at index 4
//so tuple is also an array only but in an enhanced way



// so with tuple we can define the data type of each and every element in array
// but withn array w have to define data type of whole array at once


