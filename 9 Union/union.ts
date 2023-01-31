//union type describes a value that can be of several types

// so in union we can use multiple data types with pipe symbol or (or symbol)
let data : number | string = 10

function combine (a:number,b:number) {
    return a+b
}

console.log(combine(10,20))

//now if we want string value with a and b we can do as below


function combine2 (a:number | string,b:number | string) {

    if(typeof a === 'number' && typeof b === 'number')
    {
        return a+b;
    }
    else{
        return a.toString() + b.toString()
    }
   
}
console.log(combine2(10,20))
console.log(combine2('aman','sunil'))

//if we are not sure which data is to be cecieved then we can use any
let c:any = 345;
let d :any = 'sidhu';
let e:any = true

//so which is good to use any[]  or union

// Union is much better because here we can provide some restrictions
