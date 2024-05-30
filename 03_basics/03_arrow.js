/*

const user={
    username:"Rahul",
    price:999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to the website`);
    }
}

user.welcomeMessage()

*/

/*
const chai = () => {
    let username="Rahul"
    console.log(this.username);
}


chai()

*/

// explicit return of arrow function
/*
const addTwo = (num1,num2) => {
    return num1+num2;
}

console.log(addTwo(5,4));

*/

// implicit return using arrow function

const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(1,4));