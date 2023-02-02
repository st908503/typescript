"use strict";
//access modifier is oops concept
//access modifer define access poperty of class and functions
class Users {
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
    getNameLength() {
        console.log(this.name.length);
    }
}
const u1 = new Users;
u1.setName('Shashank');
// u1.name= 'SAHIL' // NOW WE CANT EDIT THIS BEACUSE ITS PRIVATE
u1.displayName();
u1.getNameLength();
//here user is public and name can be changed by anyone but if we dont want our name to be changed we can use private infront of it
//A FUNCTIUON CAN ALSO BE PRIVATE AND PUBLIC 
