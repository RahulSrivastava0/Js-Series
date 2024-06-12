const arr=[1,2,3,4,5]
for(const i of arr)
{
    // console.log(i);
}

const greeting = "Hello Guys I am Rahul"
for(const greet of greeting)
{
    // console.log(greet);
}

const map = new Map();
map.set('IN',"INDIA")
map.set('UK',"UNITED KINGDOM")
map.set('JP',"JAPAN")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,' : ',value)
}