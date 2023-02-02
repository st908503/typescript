//access modifier is oops concept

//access modifer define access poperty of class and functions

class Users {
    private name: '';

    setName(name){
        this.name = name;
    } 
    displayName()
    {
        console.log(this.name)
    }

   private  getNameLength()
    {
        console.log(this.name.length)
    }
}

const u1 = new Users;
u1.setName('Shashank')
// u1.name= 'SAHIL' // NOW WE CANT EDIT THIS BEACUSE ITS PRIVATE
u1.displayName();
u1.getNameLength() // now we cant use this outide user class it should be used in user class only




//here user is public and name can be changed by anyone but if we dont want our name to be changed we can use private infront of it

//A FUNCTIUON CAN ALSO BE PRIVATE AND PUBLIC 

// private can be done by putting private keyword

