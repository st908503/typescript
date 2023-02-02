class Users {
   name: 'anil';

}

const u1 = new Users ();
console.log((u1.name))

//now in above code if we put private in front of namke we  will get error at line 17 because we are trying to get name outside class

class Users1 {
    private name: 'anil';
 
 }
 
 const u2 = new Users1 ();
 console.log((u2.name))
 

//now if this was not private like first case then we can also manupulate name field 

class Users2 {
   public name: 'anil';
 
 }
 
 const u3 = new Users2 ();
 u3.name = 'Sahil';
 console.log((u3.name)) 

//  now if we want no one to edit the name field just read then we use readonly

class Users3 {
    readonly name: 'anil';
 
 }
 
 const u4 = new Users3 ();
 u4.name = 'Sahil'; // error because its just readonly 
 console.log((u4.name)) 