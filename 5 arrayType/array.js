var arr = ['ant', 'cow', 'dog', 'cat'];
// here all are string so we can uwrite as below
var arr1 = ['ant', 'cow', 'dog', 'cat'];
// we can not mutate data with ny other data type her it will aceept string only
// arr1[2] = 345 //this will give error 
arr1.push('hello'); //this is ok
console.log(arr1);
// but what if
var arr2 = [1, 'ant', true, 'cow', 45, 'dog', 'cat'];
// here we have multiple data types in an array so we can do in two ways:
// 1st
var arr3 = [1, 'ant', true, 'cow', 45, 'dog', 'cat'];
//we can use any[]
//2nd
var arr4 = [1, 'ant', true, 'cow', 45, 'dog', 'cat'];
// we can leave as it is
