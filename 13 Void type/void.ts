function printData(){
    console.log('Hello Code');
    //this fn is not returning anything its just consoling
    //this means this fn is of void type
}
//or 

let today;
function printData2(){
    today = new Date();
}
printData2();
//here again the function is not returning anything

//if it was like this

let today2;
function printData3(){
    return today = 23*89*98;
}
printData3();
//now this time this is not a void fn because it is returning a numeric result


//how to define void 
//so the return type of function decides automatically the type if no return type then its void






