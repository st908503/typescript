"use strict";
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " is added ");
    };
    Users.prototype.removeUser = function (user) {
        console.log("".concat(user, " is removed "));
    };
    return Users;
}());
var user1 = new Users;
var result = user1.addUser('Shashank');
user1.removeUser('Sahil');
console.log(result);
