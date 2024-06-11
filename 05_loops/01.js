const arr=[1,3,5,7,9];

for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }

    //  print table
const n=5
for(let i =1;i<=10;i++)
{  
    console.log(`${n} * ${i} = ${n*i}`);
}

// printing 1 to 20

for(let i=1;i<=20;i++)
    {
        if(i==10)
            {break;}
        if(i==5)
            {
                continue;
            }
        console.log(`value of i is ${i}`);
    }