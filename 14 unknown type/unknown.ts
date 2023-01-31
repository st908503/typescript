//when we dont know which data is to be received by a variable that time we can define it as unknown
//we cam also use any[] in this case but unknown is more suitable



let data: unknown;
data = 20;
data= 'hELLO';

//OR

let data1: any;
data1 = 20;
data1= 'hELLO';

//now

let data2: any;
data2 = 20;
data2= 'hELLO';
let item:string;
item = data2;

//everything seems fine with any by now

//but

let data3: unknown;
data3 = 20;
data3= 'hELLO';
let item2:string;
item2 = data3;
//now item shows error

//when we used any the power of typescript is switched off. Unknown is little smart than any
//hence we should use unknown in place of any
//so with unknown we can use type of for avoiding error

let data4: unknown;
data4 = 20;
data4 = 'hELLO';
let item3:string;

if(typeof data4 === 'string'){
    item3 = data4;
}





