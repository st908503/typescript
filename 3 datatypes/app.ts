let a:number =  10;
let str: string = 'Hello';
let isTru : boolean = false;


function add(n1:number,n2:number){
    return n1+n2;
}

let result = add(90,20);

console.log(result)



function add2(b1:string,b2:string){
    return b1+b2;
}

let result2 = add2('90','20');

console.log(result)





let data1;

data1 = 3243;
data1 = true;
data1 = 'hELLO';

// THIS TIME WE DIDNT ASSIGN ANYTHING IN DATA SO IT CAN ACCEPT ANY DATA TYPE

// but if 

// we do 


//typescript can automatically detect the data type of variable declared for the first time

let data = 'hello';

// now we cant assign any num in variable data IT SHOULD BE ONLY STRING

// this is called type inference


// we can also make a specific number as type

let s : 5;
s=5 //s can only be 5 now
s=10 //s cant be 10 now
 



