/*
const userEmail="Rahul@44"

if(userEmail)
    {
        console.log("Got the user Email");
    }
else{
    console.log("Don't have user Email");
}

*/

// Nullish coalescing Operator

let val;

console.log(val=10??5);
console.log(val=null??5);
console.log(val=null??undefined);
console.log(val=9??undefined);

// Ternary Operator

const iceTeaPrice=50

iceTeaPrice>50?console.log("more than 50"):console.log("less than or equal to 50");
