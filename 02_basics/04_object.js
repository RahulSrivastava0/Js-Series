const tinderUser = {}

tinderUser.id="123abc"
tinderUser.Name="Rahul"
tinderUser.age=21

// console.log(tinderUser)

const user = {
    email:"hello@gmail.com",
    age:21,
    fullname:{
        username:{
            firstname:"Rahul",
            lastname:"Srivastava"
        }
    }
}

console.log(user.fullname.username.firstname)


//  merging 2 object in new object
 
const obj1 ={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

// it copy the properties and value from source and stored in the  target
//const obj3 = Object.assign({},obj1,obj2)   


// spread method
const obj3 = {...obj1,...obj2}

console.log(obj3)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('id'))

const course = {
    courseName:"Js in Hindi",
    price:999,
    courseInstructor:"Hitesh"
}

// console.log(course.courseInstructor)

//  there is different and more usable method to access object

const {courseInstructor:Instructor} = course
console.log(Instructor)