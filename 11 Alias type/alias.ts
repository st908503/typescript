//we can create a type alias for those variables that are having same data type
// this will promote code reusability



  let a: string | number | undefined = 10;
  let b: string | number | undefined = 'Hello';
  let c: string | number | undefined = undefined;

  //now since a, b and c is using same data type set we can crate an alias for them

type varType =  string | number | undefined ;
let d : varType = 10;
let e : varType ='Hello';
let f : varType = undefined;



