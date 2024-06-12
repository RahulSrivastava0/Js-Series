const num=[1,2,3,4,15]
// const myNum=num.reduce(function (acc,curval) {
//     return curval+acc
// },0)

//  using arrow function

const myNum=num.reduce((acc,curval) => (acc+curval),0)
console.log(myNum);

const shoppingCart =[
    {
        itemName:"js course",
        price:999
    },
    {
        itemName:"mobile app course",
        price:4500
    },
    {
        itemName:"springboot course",
        price:7800
    }
]

const payment=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(payment);