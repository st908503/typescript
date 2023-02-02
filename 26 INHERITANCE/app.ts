class CreateAccount {
    makeEmail(user){
return `${user}@test.com`
    }
}


class Users extends CreateAccount{
    addUser (user){
        return `${user} added as an user`
    }
    deleteUser(){

    }
}

const u1 = new Users ();
console.log(u1.addUser('shashank'))
console.log(u1.makeEmail('shashank')) //error because makeemail is part of above/parent class

//now when we put extends CreateAccount in users class so users class becomes child class and createAccount becomes parent class

//suppose we have similaer class name employee

class Employees extends CreateAccount {
    addEmployee(emp){
        return `${emp} is added as employee`
    }
}

const e1 = new Employees();
console.log(e1.addEmployee("Sam"))
console.log(e1.makeEmail("Sam"))


//hence inheritence propted code reusability here