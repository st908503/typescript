
class Users {
    name: '';
    email: '';
    addUser(user){
        return `${user} is added ` 
    }
    removeUser(user){
        console.log ( `${user} is removed ` )
    }
    
    }
    
    let user1 = new Users;
    const result = user1.addUser('Shashank')
    user1.removeUser('Sahil')
    console.log(result)