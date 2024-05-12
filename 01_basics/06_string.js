const name = "Rahul"
const price = 45

// concatenate string

console.log(name+" "+price+"LPA")   // dont concatenate string using this methods

console.log(`Hello my name is ${name} and my package is of ${price}LPA`);

//  method of strings
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf('u'))

console.log(name.substring(0,4))
console.log(name.slice(-4,3))

const heroesName = "     Spider Man    "
console.log(heroesName.trim())


const url = "https://thecodehelp%20rahul.com"
console.log(url.replace('%20','_'))

const value = "my-name-is-rahul"
console.log(value.split('-'))