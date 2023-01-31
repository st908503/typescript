// return type value of a function decides the return type of a function
//if numeric then numeric string then string

function one(){
    return "Hello";
}
//return type string

function two(){
    return 23;
}
//return type number


// now we can add datay type

function three():number
{
 return 20;
//  return 'hello'; this will give error because function can only return number
}

function four(a:number, b:number):number{
    return a+b;
    // return a+b+'hello'; will give error because the fn can only return number
}
four(10,20)

//lets say we dont pass parameter
const g = 40;
const h = 'Hello'; 
function five():number
{
return g;
// return h; this will give an error because fn return type is number and h is string
}


// Can a fn type be undefined?
// if not then what can be alternative