function sayMyName()
{
    console.log('R')
    console.log('A')
    console.log('H')
    console.log('U')
    console.log('L')
}

// sayMyName  // this is just the refernce of that function

// now this will execute the function
sayMyName()

// create a function to add two number

function addNumber(a,b)
{
    const sum=a+b
    return sum
}

const result = addNumber(5,7)
console.log("the result : ",result);

// create a function to check logged in

function isLoggedIn(username='rahul')
{
    return `${username} is logged in`
}

console.log(isLoggedIn('Vegeta'));