// object literal

// declaring a symbol and adding teh symbol as a key
    const mysym = Symbol("Keys1")

const details = {
    name:"Rahul",
    [mysym]:"Hello my symbol is here",
    "fullName":"Rahul Kumar Srivastava",
    age:21,
    email:"srivastava960s@gmail.com",
    gender:"M",
    country:"India"
}

console.log(details.name)
console.log(details["email"])
console.log(details["age"])
console.log(details["fullName"])
console.log(details[mysym])

// changing emails

    details["email"]="pakoda@gmail.com"
    console.log(details["email"])

// locking the values so that my objects key values cannot by changed

Object.freeze(details)
details["email"]="hero@gmail.com"
console.log(details["email"])