let a =300
if(true)
    {
        let a = 10
        const b = 20
        var c = 30

        console.log("inner B is : ",b);
    }

console.log(a);
// console.log(b);
console.log(c);


if(true)
    {
        const username="Rahul"
        if(username==="Rahul")
            {
                const website="Youtube"
                console.log(`${username} ${website}`);
            }
        // console.log(website);
    }