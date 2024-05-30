// Immediately invoked function expression
/*
function chai()
{
    console.log(`DB Connected`);
}

chai()

*/


// now using IIFE
(function chai()
{
    console.log(`DB CONNECTED`);
})();


// using IIFE using arrow function

/*
( () => {
    console.log(`DB CONNECTED`);
}) ()

*/


//  pass value in IIFE using arrow function
( (name) => {
    console.log(`my name is : ${name}`);
})('Rahul')