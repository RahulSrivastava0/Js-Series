// dates

const myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


console.log(typeof myDate)



const newDate = new Date(2023,5,13,5,45)
console.log(newDate.toLocaleString())

// now do it like mm-dd-yyyy
let dateNew = new Date("05-24-2003")
console.log(dateNew.toLocaleString())