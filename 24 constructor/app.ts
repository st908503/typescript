




// class Users {
//     name: '';
//     age: '';
//     email : '';
// constructor(name, age, email)
// {
//    this.name = name;
//    this.age = age;
//    this.email =email;

// }
// displayVal(){
//     console.log(this.name, this. age, this. email)
// }
// }
// // constructor gets called automatically whenever object is created
// const u1 = new Users('ashank', 34, 'dsfsd@xx.com');
// u1.displayVal();

// now for the same if we removev below lines from and put public then also our code will work

// name: '';
//     age: '';
//     email : '';

// and 

// this.name = name;
// this.age = age;
// this.email =email;


class Users {
    
constructor(public  name, public  age, public  email)
{

}
displayVal(){
    console.log(this.name, this. age, this. email)
}
}
// constructor gets called automatically whenever object is created
const u1 = new Users('ashank', 34, 'dsfsd@xx.com');
u1.displayVal();


