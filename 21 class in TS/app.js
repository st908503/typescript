"use strict";
//class is a user defined type that describes what a certain type of object
//we can define property and methods in class
class Users {
    addUser(user) {
        return `${user} is added `;
    }
    removeUser(user) {
        console.log(`${user} is removed `);
    }
}
let user1 = new Users;
const result = user1.addUser('Shashank');
user1.removeUser('Sahil');
console.log(result);
