//  primitive datatype

// 7 types : string, number, boolean, null, undefined, symbol, BigInt
const score=100

 let marks=77
let username;
let temp=null;

const isLoggedIn=false
let name="Rahul"


let id=Symbol('123')
let id2=Symbol('123')
//  for symbol we have to create id 
console.log(id===id2);

const bigNumber = 9999999999999999n
console.log(typeof (bigNumber))

// Non Primitive

/*
    Array
    Objects
    Functions
*/

let arr = ['rahul','kumar','srivastava'];   //array

let myObj={
    // key : value (pair)
    name:"Rahul",
    age:22
}