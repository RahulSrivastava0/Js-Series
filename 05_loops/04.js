const myObject = {
    js:"Javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const myArr = ["Thor","Superman","Ironman","Spiderman","batman"]
for (const i in myArr) {
    console.log(myArr[i]);
}

const map = new Map()
map.set('Mon',"Monday")
map.set('Tue',"Tuesday")
map.set('Wed',"Wednesday")

for (const [key,value] in map) {
    console.log(key,value);
}