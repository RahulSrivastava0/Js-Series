const num=[1,2,3,4,5,6,7,8,9,10]
const myNum=num.map((i)=>(i+10))
console.log(myNum)

const arr=[1,2,3,4,5,6,7,8,9,10]
const myArr=arr
    .map((i)=>(i*10))
    .map((i)=>(i+1))
    .filter((i)=>(i>40))

console.log(myArr);