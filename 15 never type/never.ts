//when a function return anything at all then it is never type


function tryReturn () {
    return true;
}

console.log(tryReturn())
// this time it is returnning true


// what if we dont return anything at all like below
function tryReturn1 () {
    
}
console.log(tryReturn1())
//this will returnm undefined
// but we cam not give undefined as a data type to function


function apiError (msg,code)
{
throw{message:msg,apiCode:code }
}

console.log(apiError("Sever side error", 500))

//we can also use never here

function apiError1 (msg,code):never
{
throw{message:msg,apiCode:code }
}

console.log(apiError1("Sever side error", 500))
//so we knew here the function wont return anything not even undefined so we used never
// why nothing is returned because we got an error and in typescript as soon as there is an error the fn wont return anything

// questions:
// never examples
