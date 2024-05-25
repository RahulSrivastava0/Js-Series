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


// create a function to calculate cartPrice

function cartPrice(val1,val2,...num1)
{
    return num1
}

console.log(cartPrice(200,300,400,5000,400,200))

// passing object using function

function newUser(anyObject)
{
    return `the username is ${anyObject.username} and the price is ${anyObject.price}`
}

console.log(newUser(
    {
        username:"Rahul",
        price:400
    }
));

// passing array in function

const newArray = [10,20,30,40,50]

function getArray(newArray)
{
    return newArray[2];
}

console.log(getArray(newArray));