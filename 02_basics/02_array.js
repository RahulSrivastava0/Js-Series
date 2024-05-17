/*
const marvel_heros = ['Ironman','spiderman','thor']
const dc_heros = ['batman','superman','flash']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const hero = marvel_heros.concat(dc_heros)
console.log(hero)

const allHero = [...marvel_heros,...dc_heros]  // spread opeartor
console.log(allHero)

const arr = [1,2,3,[2,4],7,8,4,[4,5,8,[4,6]]]
console.log(arr.flat(Infinity))

*/

console.log(Array.isArray("Rahul"))
console.log(Array.from("Rahul"))
console.log(Array.from({
    name:'rahul',
    age:21,
    gender:'M'
}))